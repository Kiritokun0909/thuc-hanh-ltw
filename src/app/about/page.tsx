import homeStyles from "../page.module.css";

export default function About() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.pageHeader}>
        <h1>About us</h1>
      </div>
      <div>
        <h2>Who we are</h2>
        <p>
          We provide services that allow you to interact with users (such as
          through direct messages and group direct messages) and participate in
          large and small spaces (or “servers”). Our services may also include
          access to certain software, features, and content, including items
          that you can purchase from us or others.
        </p>
      </div>
    </div>
  );
}
