/**
 * High-fidelity custom Web Audio synthesized digital voice click sound effect.
 * Mimics a premium, tactile tactile click / soft bubble pop.
 */
export function playClickVoiceEffect() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    // Create a temporary AudioContext to bypass suspended/blocked state issues on different browsers
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // 1. Organic low-frequency vocal sweep
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    // Frequency sweep from 800Hz to 150Hz very rapidly to mimic a soft organic "click" or tongue tick
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);

    gainNode.gain.setValueAtTime(0.0, now);
    gainNode.gain.linearRampToValueAtTime(0.2, now + 0.003); // rapid attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.04); // short decay

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    // 2. High-frequency acoustic sparkle overlay
    const spark = ctx.createOscillator();
    const gainSpark = ctx.createGain();

    spark.type = 'triangle';
    spark.frequency.setValueAtTime(3200, now);
    spark.frequency.exponentialRampToValueAtTime(800, now + 0.01);

    gainSpark.gain.setValueAtTime(0.08, now);
    gainSpark.gain.exponentialRampToValueAtTime(0.001, now + 0.01);

    spark.connect(gainSpark);
    gainSpark.connect(ctx.destination);

    // Start instantly
    osc.start(now);
    osc.stop(now + 0.05);

    spark.start(now);
    spark.stop(now + 0.02);
  } catch (err) {
    // Fail-safe for permission or environment blocks
  }
}
