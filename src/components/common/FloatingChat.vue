<template>
  <!-- Floating Chat Button -->
  <div class="fixed bottom-6 left-6 z-50">
    <!-- Chat Widget (when open) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-4 opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="mb-4 w-80 h-[400px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-gray-light"
      >
        <!-- Header -->
        <div
          class="gradient-primary text-white p-4 flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                />
                <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-lg">Chat Assistant</h3>
              <p class="text-xs opacity-90">Tanya apapun tentang kami</p>
            </div>
          </div>
          <button
            @click="toggleChat"
            class="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Messages Area -->
        <div
          ref="messagesContainer"
          class="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-off-white"
        >
          <!-- Welcome Message -->
          <div v-if="messages.length === 0" class="text-center py-8">
            <div
              class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="text-neutral-text-dark font-medium">
              Halo! Ada yang bisa kami bantu?
            </p>
            <p class="text-sm text-neutral-text-dark opacity-70 mt-2">
              Tanyakan tentang program tahfizh kami
            </p>
          </div>

          <!-- Message List -->
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="
              message.role === 'user'
                ? 'flex justify-end'
                : 'flex justify-start'
            "
          >
            <div
              :class="[
                'max-w-[80%] rounded-2xl px-4 py-3',
                message.role === 'user'
                  ? 'bg-primary text-white rounded-br-sm'
                  : 'bg-white text-neutral-text-dark rounded-bl-sm shadow-sm',
              ]"
            >
              <p class="text-sm leading-relaxed whitespace-pre-wrap">
                {{ message.content }}
              </p>
              <p
                :class="[
                  'text-xs mt-1',
                  message.role === 'user'
                    ? 'text-white/70'
                    : 'text-neutral-text-dark/50',
                ]"
              >
                {{ message.timestamp }}
              </p>
            </div>
          </div>

          <!-- Loading indicator -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <div class="flex gap-1">
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style="animation-delay: 0ms"
                ></div>
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style="animation-delay: 150ms"
                ></div>
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style="animation-delay: 300ms"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-white border-t border-neutral-gray-light">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ketik pesan..."
              class="flex-1 px-4 py-3 border border-neutral-gray-light rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              :disabled="isLoading"
            />
            <button
              type="submit"
              :disabled="!userInput.trim() || isLoading"
              class="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </transition>

    <!-- Floating Button -->
    <button
      @click="toggleChat"
      class="w-16 h-16 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
      :class="{ 'rotate-0': !isOpen, 'rotate-180': isOpen }"
    >
      <svg
        v-if="!isOpen"
        class="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
        />
        <path
          d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
        />
      </svg>
      <svg
        v-else
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <!-- Notification Badge -->
      <span
        v-if="unreadCount > 0"
        class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
      >
        {{ unreadCount }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from "vue";

const isOpen = ref(false);
const userInput = ref("");
const messages = ref([]);
const isLoading = ref(false);
const messagesContainer = ref(null);
const unreadCount = ref(0);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    unreadCount.value = 0;
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

const formatTime = () => {
  const now = new Date();
  return now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  const userMessage = {
    role: "user",
    content: userInput.value,
    timestamp: formatTime(),
  };

  messages.value.push(userMessage);
  const question = userInput.value;
  userInput.value = "";
  scrollToBottom();

  isLoading.value = true;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: question,
        history: messages.value.slice(-10), // Send last 10 messages for context
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response");
    }

    const data = await response.json();

    const assistantMessage = {
      role: "assistant",
      content: data.response,
      timestamp: formatTime(),
    };

    messages.value.push(assistantMessage);

    // Show notification if chat is closed
    if (!isOpen.value) {
      unreadCount.value++;
    }
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = {
      role: "assistant",
      content: "Maaf, terjadi kesalahan. Silakan coba lagi.",
      timestamp: formatTime(),
    };
    messages.value.push(errorMessage);
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

// Auto scroll when messages change
watch(
  messages,
  () => {
    scrollToBottom();
  },
  { deep: true }
);
</script>

<style scoped>
/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #008080;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #006666;
}
</style>
