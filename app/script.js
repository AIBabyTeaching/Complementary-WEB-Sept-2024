document = getElementById("userForm").addEventListener("submit", async function(e) {
    e.preventDefault(); //will prevent the default behavior of an element from triggering, allowing more control over the flow of an application
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    try {
        const response = await fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, password})
    });
    const result = await response.json();

    if (response.ok) {
        addListener(result.message);
    } else {
        alert(result.error);
    }
    } catch (error) {
    console.error(error);
    }
    })
