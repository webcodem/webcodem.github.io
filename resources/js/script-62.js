document.addEventListener("DOMContentLoaded", function() {
    const contentUrls = {
        "imagen1": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2xvZ28ucG5n",
        "imagen2": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2JhYnkgcGxheWVyIC0gd2ViY29kZW0ucG5n",
        "imagen3": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL0NhbGwgT2YgRHV0eSBNb2Rlcm4gV2FyZmFyZSBJSSAtIHdlYmNvZGVtLnBuZw",
        "imagen4": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2ZhbGxvLWRlLXNpc3RlbWEucG5n",
        "imagen5": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2FjdGlvbnMtc3R1ZmYtMS0wLTIucG5n",
        "imagen6": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2JhcmUtYm9uZXMtcGx1cy5wbmc",
        "imagen7": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL3dlYmNvZGVtLW1hcmtldHBsYWNlLnBuZw",
        "imagen8": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL3RleHR1cmEucG5n",
        "imagen9": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL3RleHR1cmEucG5n",
        "imagen10": "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL3RleHR1cmEucG5n"
    };

    for (const [id, url] of Object.entries(contentUrls)) {
        const decodedUrl = atob(url);
        const imgElement = document.getElementById(id);
        if (imgElement) {
            imgElement.src = decodedUrl;
        }
    }

    const faviconUrl = "aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL211bHRpbWVkaWEvaW1hZ2VuL2xvZ28ucG5n";
    const decodedFaviconUrl = atob(faviconUrl);
    const linkElement = document.createElement('link');
    linkElement.rel = 'icon';
    linkElement.href = decodedFaviconUrl;
    document.head.appendChild(linkElement);
});
