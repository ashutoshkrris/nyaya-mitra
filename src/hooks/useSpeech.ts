import { useState, useEffect, useCallback } from 'react';

export function useSpeech() {
    const [speakingId, setSpeakingId] = useState<string | null>(null);

    const stop = useCallback(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        setSpeakingId(null);
    }, []);

    useEffect(() => {
        return () => {
            stop();
        };
    }, [stop]);

    const speak = useCallback((id: string, text: string, lang: string) => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
            alert('Text-to-Speech is not supported in this browser.');
            return;
        }

        if (speakingId === id) {
            stop();
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
        utterance.rate = 0.95;
        utterance.pitch = 1.0;

        utterance.onend = () => setSpeakingId(null);
        utterance.onerror = () => setSpeakingId(null);

        setSpeakingId(id);
        window.speechSynthesis.speak(utterance);
    }, [speakingId, stop]);

    return { speak, stop, speakingId };
}