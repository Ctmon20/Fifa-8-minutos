const URL_API_SCANNER = "https://script.google.com/macros/s/AKfycbz332MSjpOJtmordqetu-vBMX2xivAaVRoanK6YFZ2bWrHS-KhlipkbSq8c_WMFq2mPaw/exec";

const db = {
    call: async (payload) => {
        try {
            const response = await fetch(URL_API_SCANNER, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error("Erro na API:", error);
            return null;
        }
    }
};
