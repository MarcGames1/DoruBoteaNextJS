"use client";
import { Button } from "react-bootstrap";
import styles from "./ConsentBanner.module.css";
import { style } from "dom-helpers";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { gtag } from "@/lib/gtag";

type ConsentDecision = "granted" | "denied";

const ConsentBanner = () => {
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing

  const [ad_storage, set_ad_Storage] = useState<ConsentDecision>("granted");
  const [analytics_storage, set_analytics_storage] =
    useState<ConsentDecision>("granted");
  const [ad_user_data, set_ad_user_data] = useState<ConsentDecision>("granted");
  const [ad_personalization, set_ad_personalization] =
    useState<ConsentDecision>("granted");
  const [personalization_storage, set_personalization_storage] =
    useState<ConsentDecision>("granted");
  const [security_storage, set_security_storage] =
    useState<ConsentDecision>("granted");

  const cookies = useCookies();

  const sendConsent = useCallback((consent: any) => {
    // @ts-ignore
    gtag("consent", "update", consent);
  }, []);

  useEffect(() => {
    if (cookies.get("cookies_consent") !== undefined) {
      setDecisionMade(true);
    } else {
      setDecisionMade(false);
    }
  }, [cookies, setDecisionMade, sendConsent]);

  const handleDecision = () => {
    const consent = {
      ad_storage: ad_storage,
      analytics_storage: analytics_storage,
      ad_user_data: ad_user_data,
      ad_personalization: ad_personalization,
      personalization_storage: personalization_storage,
      security_storage: security_storage,
    };

    cookies.set("cookies_consent", JSON.stringify(consent), {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
      domain: "avocatdorubotea.ro",
    });
    sendConsent(consent);
    setDecisionMade(true);
  };

  const handleAcceptAllCookies = () => {
    set_ad_Storage("granted");
    set_security_storage("granted");
    set_personalization_storage("granted");
    set_ad_personalization("granted");
    set_ad_user_data("granted");
    set_analytics_storage("granted");
    handleDecision();
  };
  return (
    !decisionMade && (
      <div className={styles.container}>
        <p>
          Folosim cookie-uri pentru a permite functionarea corecta si sigura a
          site-urilor noastre si pentru a va oferi cea mai buna experienta de
          utilizare
        </p>
        <div className={styles.buttons_container}>
          <Button onClick={handleAcceptAllCookies}>Acceptati toate</Button>
          <Button onClick={handleAcceptAllCookies} variant={"outline-primary"}>
            Acceptati doar ce e necesar
          </Button>
        </div>
      </div>
    )
  );
};

export default ConsentBanner;
