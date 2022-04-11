
export function parseImageUrl(url: string) {
    return url.replace("http://backendapi.site/", "https://backendapi.site/defi/")
}

export function parseImageDebud(url: string) {
    return url.replace("http://localhost:8000/", "http://localhost:8000/defi/")
}
