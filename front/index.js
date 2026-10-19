fetch("")
    .then(res => res.json())
    .then(clients => {
        clients.forEach(client => {
            const p = document.createElement("p")
            p.textContent = client.nom
            document.body.appendChild(p)
        })
    })

fetch("")
    .then(res => res.json())
    .then(data => {
        const p = document.createElement("p")
        p.textContent = data.message
        document.body.appendChild(p)
    })