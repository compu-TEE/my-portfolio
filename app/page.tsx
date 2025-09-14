import Image from "next/image"

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <h1>Tarun P.</h1>
      <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} style={{ borderRadius: "50%" }} />
      <p>I am a Computer Science enthusiast exploring blockchain and web3.</p>
      <section style={{ marginTop: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          <li><a href="https://github.com/compu-TEE/IEEE_C03_SysMon">System Monitor CLI App</a></li>
        </ul>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>Blog</h2>
        <p>Check out my latest thoughts and updates:</p>
        <a href="/blog" style={{ 
          backgroundColor: "#059669", 
          color: "white", 
          padding: "0.5rem 1rem", 
          borderRadius: "0.5rem", 
          textDecoration: "none",
          display: "inline-block",
          marginTop: "0.5rem"
        }}>
          Visit Blog →
        </a>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>Contact</h2>
        <p>Email: tarun@example.com</p>
        <p>GitHub: <a href="https://github.com/compu-TEE">github</a></p>
      </section>
    </main>
  )
}
