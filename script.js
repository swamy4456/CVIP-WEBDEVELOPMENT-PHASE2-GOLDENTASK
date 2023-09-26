document.addEventListener("DOMContentLoaded", function () {
    const originalLinkInput = document.getElementById("originalLink");
    const shortenButton = document.getElementById("shortenButton");
    const shortenedLink = document.getElementById("shortenedLink");

    shortenButton.addEventListener("click", function () {
        const originalURL = originalLinkInput.value;

        // Here, you can implement your own link shortening logic or use an API.
        // For simplicity, we'll just display the original URL.

        shortenedLink.textContent = originalURL;
        originalLinkInput.value = "";
    });
});
