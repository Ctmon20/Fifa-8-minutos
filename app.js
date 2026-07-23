const URL_API_SCANNER = "https://script.google.com/macros/s/AKfycbxUSrwwSQfzj2EodbPSRVjEo67-hcwGBiDMx2PZTsV61MPELNDzvUKusxLfzQg-FEXe-w/exec";

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