class HeroSection {
    constructor() {
        this.getStartedBtn = document.querySelector('.primary-btn');
        this.learnMoreBtn = document.querySelector('.secondary-btn');
        this.heroImage = document.querySelector('.hero-image img');

        this.init();
    }

    init() {
        this.getStartedBtn.addEventListener('click', () => this.handleGetStarted());
        this.learnMoreBtn.addEventListener('click', () => this.handleLearnMore());
    }

    handleGetStarted() {
        alert('🚀 Welcome — Pritthi Prokash Sarkar!');
    }

    handleLearnMore() {
        alert('ℹ️ Learn more about Pritthi Prokash Sarkar.');
    }


}

document.addEventListener('DOMContentLoaded', () => new HeroSection());
