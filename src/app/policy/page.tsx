import homeStyles from "../page.module.css";

export default function Policy() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.pageHeader}>
        <h1>Privacy & terms</h1>
      </div>
      <div>
        <h4>Information we collect automatically</h4>
        <p>
          We also collect information automatically from you when you use this
          website. This includes:
        </p>
        <ul role="list">
          <li>
            <strong>Information about your device</strong>. We collect
            information about the device you are using to access the services.
            For example, this includes information like your IP address,
            operating system information, browser information, and information
            about your device settings, such as your microphone and/or
            camera.&nbsp;
          </li>
          <li>
            <strong>Information about your use of the apps or websites</strong>.
            For example, we collect log and event information related to how and
            when you use our services (such as the pages, servers, and channels
            you visit, the activities you engage in, the features you use, and
            the surfaces or embedded content you interact with).
          </li>
          <li>
            <strong>Other information that we collect automatically</strong>.
            When you take certain actions on other sites, we may receive
            information about you. For example, when we advertise for third
            party platforms, if you click on the ad, we may receive information
            about which ad you saw and on which platform. Similarly, we may also
            receive certain information when you click on a referral link, such
            as which website you came from.
          </li>
        </ul>
      </div>
    </div>
  );
}
