export async function load() {
    let message = await fetch('https://apps.who.int/gho/athena/api/GHO/WHOSIS_000001.json?profile=simple').then((response) => response.json())
    console.log(message)
    return message
}