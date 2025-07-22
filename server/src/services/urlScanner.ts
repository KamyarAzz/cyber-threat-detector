import axios from "axios";

export async function scanUrl(url: string) {
  // Placeholder: real implementation might use external API or custom logic
  const isPhishing = url.includes("free-money") || url.includes("login");

  try {
    const response = await axios.head(url, {timeout: 3000});

    return {
      url,
      status: response.status,
      contentType: response.headers["content-type"],
      detected: isPhishing,
      message: isPhishing ? "Phishing pattern detected" : "URL seems safe",
    };
  } catch (err) {
    return {
      url,
      detected: true,
      message: "Error fetching URL — potential risk",
    };
  }
}
