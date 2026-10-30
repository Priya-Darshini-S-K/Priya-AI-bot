const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();


// AURA AI - SMART LOCAL CHATBOT
(() => {
  const launcher = document.getElementById('auraLauncher');
  const chat = document.getElementById('auraChat');
  const close = document.getElementById('auraClose');
  const form = document.getElementById('auraForm');
  const input = document.getElementById('auraInput');
  const messages = document.getElementById('auraMessages');

  if (!launcher || !chat || !form || !input || !messages) return;

  function addMessage(text, type) {
    const bubble = document.createElement('div');

    bubble.className = `aura-message ${
      type === 'user' ? 'user-message' : 'bot-message'
    }`;

    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;

    return bubble;
  }

  function toggleChat(show) {
    chat.classList.toggle('open', show);
    chat.setAttribute('aria-hidden', String(!show));
    launcher.style.display = show ? 'none' : 'flex';

    if (show) input.focus();
  }

  launcher.addEventListener('click', () => toggleChat(true));

  if (close) {
    close.addEventListener('click', () => toggleChat(false));
  }

  // Aura AI response system
  function getAuraReply(message) {
    const text = message.toLowerCase();

    if (
      text.includes('hello') ||
      text.includes('hi') ||
      text.includes('hey') ||
      text.includes('vanakkam')
    ) {
      return "Hello! 👋 Welcome to Priyadarshini's portfolio. I'm Aura AI. How can I help you?";
    }

    if (
      text.includes('who are you') ||
      text.includes('about aura') ||
      text.includes('aura ai')
    ) {
      return "I'm Aura AI, the smart portfolio assistant of S. Priyadarshini. I can help you explore her education, skills, projects and achievements. ✨";
    }

    if (
      text.includes('about') ||
      text.includes('priyadarshini') ||
      text.includes('profile')
    ) {
      return "S. Priyadarshini is a B.Com Information Technology student and aspiring Web Developer and Agentic AI Developer. She enjoys creating responsive websites and exploring AI-powered solutions.";
    }

    if (
      text.includes('education') ||
      text.includes('college') ||
      text.includes('degree') ||
      text.includes('study')
    ) {
      return "Priyadarshini is pursuing B.Com Information Technology at Dr. SNS Rajalakshmi College of Arts and Science, Coimbatore (2024–2027).";
    }

    if (
      text.includes('skill') ||
      text.includes('technology') ||
      text.includes('programming')
    ) {
      return "Her skills include HTML, CSS, JavaScript, Frontend Development, Responsive Design, UI Basics, Generative AI, Prompting, Basic Testing and Problem Solving.";
    }

    if (
      text.includes('project') ||
      text.includes('work') ||
      text.includes('portfolio')
    ) {
      return "Here are some of Priyadarshini's projects:\n\n1. Personal Portfolio\n2. Infinity Aura Digital Store\n3. Cardamom Estate – Smart Plantation Management\n4. Landing Page\n\nYou can explore the project links in the portfolio.";
    }

    if (
      text.includes('infinity aura') ||
      text.includes('digital store') ||
      text.includes('ebook')
    ) {
      return "Infinity Aura is Priyadarshini's digital store. Explore it here: https://infinitu-aura-digital.netlify.app/";
    }

    if (
      text.includes('cardamom') ||
      text.includes('estate') ||
      text.includes('plantation')
    ) {
      return "Cardamom Estate is a Smart Plantation Management project. Explore it here: https://cardamom-estates.netlify.app/";
    }

    if (
      text.includes('certificate') ||
      text.includes('certification') ||
      text.includes('internship')
    ) {
      return "Priyadarshini has completed these learning experiences:\n\n• Frontend Development Internship – UNIQ SOFTECH\n• Work Smarter with AI – Canva Design School\n• Critical Thinking in the AI Era – HP LIFE\n• Introduction to Artificial Intelligence – Simplilearn SkillUp\n• Artificial Intelligence Virtual Internship – CodeAlpha\n• Portfolio Development Weekly Task – Brand Monk Academy.";
    }

    if (
      text.includes('linkedin') ||
      text.includes('github') ||
      text.includes('contact') ||
      text.includes('social')
    ) {
      return "You can connect with Priyadarshini here:\n\nLinkedIn: https://www.linkedin.com/in/spriya-darshini/\n\nGitHub: https://github.com/Priya-Darshini-S-K";
    }

    if (
      text.includes('thank') ||
      text.includes('thanks')
    ) {
      return "You're welcome! 😊 Feel free to ask me anything about Priyadarshini's portfolio.";
    }

    if (
      text.includes('tamil') ||
      text.includes('tanglish')
    ) {
      return "Sure! Naan Tamil and Tanglish-la answer pannuren. Priyadarshini oda education, skills, projects pathi enna therinjukanum?";
    }

    if (
      text.includes('hire') ||
      text.includes('job') ||
      text.includes('developer')
    ) {
      return "Priyadarshini is interested in Web Development and AI-powered solutions. You can explore her projects and contact her through LinkedIn.";
    }

    return "Thanks for your question! 😊 I can help you explore Priyadarshini's education, skills, projects, certificates and contact details. Try asking about any of these topics.";
  }

  function sendMessage(message) {
    const question = message.trim();

    if (!question) return;

    const suggestions = messages.querySelector('.aura-suggestions');

    if (suggestions) suggestions.remove();

    addMessage(question, 'user');

    input.value = '';

    const typing = addMessage('Aura AI is thinking…', 'bot');
    typing.classList.add('aura-typing');

    setTimeout(() => {
      typing.textContent = getAuraReply(question);
      typing.classList.remove('aura-typing');
      messages.scrollTop = messages.scrollHeight;
    }, 500);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    sendMessage(input.value);
  });

  messages.addEventListener('click', event => {
    const button = event.target.closest('[data-prompt]');

    if (button) {
      sendMessage(button.dataset.prompt);
    }
  });

})();