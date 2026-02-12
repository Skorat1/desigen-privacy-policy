function toggleReadMore() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");

    if (moreText.classList.contains("hidden-content")) {
        moreText.classList.remove("hidden-content");
        moreText.classList.add("show-text");
        btnText.innerHTML = "read less";
    } else {
        moreText.classList.remove("show-text");
        moreText.classList.add("hidden-content");
        btnText.innerHTML = "read more";
    }
}   