import { t } from "../i18n/i18n";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
    const phone = t("contactPage.cards.phone.value");
    const email = t("contactPage.cards.email.value");

    // whatsapp link (spaces remove)
    const whatsappLink = `https://wa.me/qr/VMQXFETOMFO5J1?text=${encodeURIComponent(
        "Hello, I would like to get in touch with you."
    )}`;
    const mailTo = `mailto:${email}`;

    return (
        <>

            {/* Hero */}
            <section style={styles.hero}>
                <div style={styles.heroInner}>
                    <h1 style={styles.heroTitle}>{t("contactPage.title")}</h1>
                    <p style={styles.heroSub}>{t("contactPage.subtitle")}</p>
                </div>
            </section>

            {/* Content */}
            <section style={styles.section}>
                <div style={styles.container}>
                    {/* Action Buttons */}
                    <div style={styles.actionsRow}>
                        <a href={whatsappLink} target="_blank" rel="noreferrer" style={styles.btnWhatsapp}>
                            💬 {t("contactPage.actions.whatsapp")}
                        </a>

                        <a href={mailTo} style={styles.btnEmail}>
                            ✉️ {t("contactPage.actions.email")}
                        </a>
                    </div>

                    {/* Contact Cards */}
                    <div style={styles.cards}>
                        <div style={styles.card}>
                            <div style={styles.iconWrap}>📞</div>
                            <div>
                                <div style={styles.cardTitle}>{t("contactPage.cards.phone.label")}</div>
                                <div style={styles.cardValue}>{t("contactPage.cards.phone.value")}</div>
                            </div>
                        </div>

                        <div style={styles.card}>
                            <div style={styles.iconWrap}>✉️</div>
                            <div>
                                <div style={styles.cardTitle}>{t("contactPage.cards.email.label")}</div>
                                <div style={styles.cardValue}>{t("contactPage.cards.email.value")}</div>
                            </div>
                        </div>

                        <div style={styles.card}>
                            <div style={styles.iconWrap}>📍</div>
                            <div>
                                <div style={styles.cardTitle}>{t("contactPage.cards.address.label")}</div>
                                <div style={styles.cardValue}>{t("contactPage.cards.address.value")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactPage;

const styles = {
    hero: {
        background: "linear-gradient(180deg, #1d5b3a, #16422b)",
        padding: "90px 0",
    },

    heroInner: {
        width: "min(1200px, 92%)",
        margin: "0 auto",
        textAlign: "center",
    },

    heroTitle: {
        margin: 0,
        color: "#fff",
        fontWeight: 900,
        fontSize: "clamp(34px, 5vw, 64px)",
        letterSpacing: "-0.5px",
    },

    heroSub: {
        marginTop: "12px",
        color: "rgba(255,255,255,0.85)",
        fontWeight: 700,
        fontSize: "clamp(14px, 1.6vw, 20px)",
    },

    section: {
        padding: "70px 0",
        background: "#f4f7f4",
    },

    container: {
        width: "min(900px, 92%)",
        margin: "0 auto",
    },

    actionsRow: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginBottom: "26px",
    },

    btnWhatsapp: {
        textDecoration: "none",
        background: "#16a34a",
        color: "#fff",
        padding: "18px 16px",
        borderRadius: "14px",
        fontWeight: 900,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
    },

    btnEmail: {
        textDecoration: "none",
        background: "#ffffff",
        color: "#123",
        padding: "18px 16px",
        borderRadius: "14px",
        fontWeight: 900,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        border: "1px solid rgba(0,0,0,0.10)",
    },

    cards: {
        display: "grid",
        gap: "18px",
    },

    card: {
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.10)",
        borderRadius: "18px",
        padding: "22px",
        display: "flex",
        gap: "16px",
        alignItems: "center",
    },

    iconWrap: {
        width: "56px",
        height: "56px",
        borderRadius: "999px",
        background: "rgba(29, 91, 58, 0.12)",
        display: "grid",
        placeItems: "center",
        fontSize: "22px",
    },

    cardTitle: {
        fontWeight: 900,
        fontSize: "18px",
        color: "#0b2a1c",
    },

    cardValue: {
        marginTop: "6px",
        fontWeight: 800,
        color: "rgba(0,0,0,0.6)",
        fontSize: "16px",
    },
};