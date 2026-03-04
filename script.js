let allQuestions = [];
let selectedTopics = new Set();

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("questions.json");
        const data = await response.json();

        allQuestions = data.questions;

        loadTopics();
    } catch (error) {
        console.error("Error loading JSON:", error);
        alert("Failed to load questions.json. Make sure you are running with Live Server.");
    }
});

function loadTopics() {
    const topicSet = new Set();

    allQuestions.forEach(q => {
        topicSet.add(q.topic);
    });

    const topics = Array.from(topicSet).sort();

    const grid = document.getElementById("subjectGrid");
    grid.innerHTML = "";

    topics.forEach(topic => {
        const div = document.createElement("div");
        div.classList.add("subject-card");
        div.textContent = topic;

        div.onclick = () => toggleTopic(topic, div);

        grid.appendChild(div);
    });
}

function toggleTopic(topic, element) {
    if (selectedTopics.has(topic)) {
        selectedTopics.delete(topic);
        element.classList.remove("selected");
    } else {
        selectedTopics.add(topic);
        element.classList.add("selected");
    }

    document.getElementById("count").textContent = selectedTopics.size;
}

function startGeneration() {
    if (selectedTopics.size === 0) {
        alert("Please select at least one topic.");
        return;
    }

    localStorage.setItem("selectedTopics", JSON.stringify([...selectedTopics]));
    window.location.href = "exam.html";
}
