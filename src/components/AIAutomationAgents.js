import React, { useState, useEffect } from "react";
import './AIAutomationAgents.css';

// Example teammates for the hero carousel
const teammates = [
  {
    name: "Luna",
    role: "Real Estate Booking Assistant",
    avatar: "🌙",
    tagline: "Books tours, qualifies leads, 24/7."
  },
  {
    name: "Zayn",
    role: "E-commerce Product Support Rep",
    avatar: "🛒",
    tagline: "Answers product questions, upsells, never sleeps."
  },
  {
    name: "Aira",
    role: "Social Media Manager for Creators",
    avatar: "🤖",
    tagline: "Schedules posts, replies to fans, grows your brand."
  }
];

function AIAutomationAgents() {
  const [heroIdx, setHeroIdx] = useState(0);

  // Auto-slide effect for the hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % teammates.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // --- Pure React styles ---
  const styles = {
    main: {
      fontFamily: "sans-serif",
      background: "#181824",
      minHeight: "100vh"
    },
    heroSection: {
      padding: "3rem 1rem",
      textAlign: "center",
      background: "linear-gradient(120deg, #23234a 0%, #181824 100%)",
      position: "relative"
    },
    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
      color: "#fff"
    },
    heroTitleGradient: {
      color: "#00fff7",
      background: "linear-gradient(90deg, #00fff7 0%, #ff00cc 60%, #7f5cff 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    heroCarousel: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      marginBottom: "2rem",
      flexWrap: "wrap"
    },
    heroCard: (active) => ({
      border: active ? "2px solid #00fff7" : "2px solid #23234a",
      borderRadius: 16,
      padding: "1.5rem 1rem",
      minWidth: 180,
      background: active ? "#23234a" : "#181824",
      boxShadow: active ? "0 4px 24px #00fff744" : "none",
      color: "#fff",
      cursor: "pointer",
      transition: "all 0.2s"
    }),
    heroAvatar: {
      fontSize: "2.5rem"
    },
    heroName: {
      fontWeight: 600,
      margin: "0.5rem 0 0.2rem"
    },
    heroRole: {
      fontSize: "1rem",
      color: "#00fff7"
    },
    heroTagline: {
      fontSize: "0.95rem",
      color: "#b6ffe6",
      marginTop: 8
    },
    heroSubtext: {
      fontSize: "1.3rem",
      margin: "1.5rem 0",
      color: "#b6ffe6"
    },
    ctaBtn: {
      display: "inline-block",
      background: "linear-gradient(90deg,#00fff7,#ff00cc 80%, #7f5cff 100%)",
      color: "#181824",
      fontWeight: 700,
      padding: "1rem 2.5rem",
      borderRadius: 32,
      fontSize: "1.2rem",
      textDecoration: "none",
      marginTop: "1rem",
      boxShadow: "0 4px 24px #00fff733",
      position: "sticky",
      bottom: "1rem",
      zIndex: 10,
      maxWidth: "90vw",
      transition: "background 0.2s, box-shadow 0.2s"
    }
  };

  return (
    <main style={styles.main}>
      {/* 1. Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroTitle}>
          Not Just Bots. <span style={styles.heroTitleGradient}>AI Teammates.</span>
        </div>
        <div style={styles.heroCarousel}>
          {teammates.map((tm, idx) => (
            <div
              key={tm.name}
              style={styles.heroCard(idx === heroIdx)}
              onClick={() => setHeroIdx(idx)}
            >
              <div style={styles.heroAvatar}>{tm.avatar}</div>
              <div style={styles.heroName}>{tm.name}</div>
              <div style={styles.heroRole}>{tm.role}</div>
              <div style={styles.heroTagline}>{tm.tagline}</div>
            </div>
          ))}
        </div>
        <div style={styles.heroSubtext}>
          <strong>Our AI agents aren’t tools — they’re teammates.</strong><br />
          Trained for your business. Available 24/7. Ready to perform.
        </div>
        <a
          href="#agent-builder"
          style={styles.ctaBtn}
        >
          Build Your AI Teammate
        </a>
      </section>
      {/* 2. Industries Showcase */}
      <section style={{
        padding: "2.5rem 1rem",
        background: "#23234a" // unified with your dark palette
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#00fff7" // accent color for heading
        }}>AI Agents by Industry</h2>
        <div
          className="industry-carousel"
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1.5rem",
            paddingBottom: "1rem",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            WebkitOverflowScrolling: "touch",
            width: "100%",
            maxWidth: "100vw"
          }}
        >
          {[
            {
              icon: "🏢",
              industry: "Real Estate",
              problem: "Missed leads & slow bookings",
              skills: ["Lead capture", "Tour booking", "Follow-up"],
              example: "“Hi! Want to schedule a tour for 123 Main St? I can help right now!”"
            },
            {
              icon: "🛒",
              industry: "E-commerce",
              problem: "Cart abandonment & slow support",
              skills: ["Product Q&A", "Upsell", "Order tracking"],
              example: "“Looking for a size M? I found it in blue and can reserve it for you!”"
            },
            {
              icon: "🏥",
              industry: "Healthcare",
              problem: "Manual appointment scheduling",
              skills: ["Appointment booking", "Reminders", "Patient Q&A"],
              example: "“Would you like to book your annual checkup for next week?”"
            },
            {
              icon: "💼",
              industry: "Agencies",
              problem: "Slow outreach & missed meetings",
              skills: ["Cold email", "Calendar booking", "Lead qualification"],
              example: "“Hi! I noticed you downloaded our guide. Want to book a free consult?”"
            },
            {
              icon: "🎤",
              industry: "Influencers",
              problem: "Time-consuming DMs & posting",
              skills: ["DM replies", "Content scheduling", "Fan engagement"],
              example: "“Thanks for your message! Want to join my VIP group?”"
            }
          ].map((ind) => (
            <div key={ind.industry} style={{
              minWidth: 220,
              maxWidth: 320,
              flex: "0 0 80vw",
              background: "#181824",
              borderRadius: 16,
              boxShadow: "0 2px 16px #00fff744",
              padding: "1.5rem 1rem",
              color: "#fff",
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ fontSize: "2rem" }}>{ind.icon}</div>
              <div style={{
                fontWeight: 700,
                fontSize: "1.1rem",
                margin: "0.5rem 0",
                color: "#00fff7"
              }}>{ind.industry}</div>
              <div style={{
                color: "#ff00cc",
                fontSize: "0.98rem"
              }}>Problem: {ind.problem}</div>
              <div style={{
                margin: "0.5rem 0",
                fontSize: "0.97rem"
              }}>
                <span style={{ color: "#7f5cff" }}>Skills:</span> {ind.skills.join(", ")}
              </div>
              <div style={{
                fontStyle: "italic",
                color: "#b6ffe6",
                fontSize: "0.95rem"
              }}>
                {ind.example}
              </div>
            </div>
          ))}
        </div>
        <style>
          {`
            .industry-carousel::-webkit-scrollbar {
              display: none;
            }
            @media (max-width: 600px) {
              .industry-carousel > div {
                min-width: 80vw !important;
                max-width: 90vw !important;
              }
            }
          `}
        </style>
      </section>
      {/* 3. Agent Builder */}
      <section id="agent-builder" style={{ padding: "2.5rem 1rem", background: "#23234a" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem", color: "#00fff7" }}>Design Your Agent in 3 Steps</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center"
        }}>
<AgentBuilder/>

        </div>
        <style>
          {`
            #agent-builder .agent-builder-card {
              background: #181824;
              border-radius: 16px;
              box-shadow: 0 2px 16px #00fff744;
              padding: 1.5rem 1rem;
              color: #fff;
              margin-bottom: 1.5rem;
              min-width: 220px;
              max-width: 340px;
              flex: 1 1 220px;
            }
            #agent-builder .agent-builder-card button {
              background: #23234a;
              color: #00fff7;
              border: 1px solid #7f5cff;
              border-radius: 18px;
              padding: 0.5rem 1.2rem;
              margin: 0.3rem 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s;
              width: 100%;
            }
            #agent-builder .agent-builder-card button.selected {
              background: #7f5cff;
              color: #fff;
              border: 2px solid #00fff7;
            }
            #agent-builder .agent-builder-card ul {
              list-style: none;
              padding: 0;
            }
            @media (max-width: 600px) {
              #agent-builder .agent-builder-card {
                min-width: 90vw;
                max-width: 98vw;
              }
            }
          `}
        </style>
      </section>

      {/* 4. Agent vs Human Comparison */}
      <section style={{ padding: "2.5rem 1rem", background: "#23234a" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#00fff7",
          fontFamily: "inherit",
          fontWeight: 700
        }}>Why Teams Choose AI</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{
            margin: "0 auto",
            minWidth: 320,
            borderCollapse: "collapse",
            fontSize: "1.05rem",
            background: "#181824",
            borderRadius: 16,
            boxShadow: "0 2px 16px #00fff744",
            overflow: "hidden",
            color: "#b6ffe6",
            fontFamily: "inherit"
          }}>
            <thead>
              <tr style={{ background: "#7f5cff", color: "#fff" }}>
                <th style={{ padding: "0.7rem 1.2rem", fontWeight: 700, fontFamily: "inherit" }}>Task</th>
                <th style={{ padding: "0.7rem 1.2rem", fontWeight: 700, fontFamily: "inherit" }}>Human</th>
                <th style={{ padding: "0.7rem 1.2rem", fontWeight: 700, fontFamily: "inherit" }}>AI Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.6rem 1.2rem", display: "flex", alignItems: "center", gap: 6, color: "#b6ffe6", fontFamily: "inherit" }}>
                  Replies to queries 24/7
                  <span title="AI agents never sleep, so your customers always get a response.">
                    <svg width="16" height="16" style={{ verticalAlign: "middle" }}><circle cx="8" cy="8" r="8" fill="#7f5cff"/><text x="8" y="12" textAnchor="middle" fontSize="12" fill="#fff">i</text></svg>
                  </span>
                </td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#ff00cc", fontFamily: "inherit" }}>❌</td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#00fff7", fontFamily: "inherit" }}>✅</td>
              </tr>
              <tr style={{ background: "#23234a" }}>
                <td style={{ padding: "0.6rem 1.2rem", display: "flex", alignItems: "center", gap: 6, color: "#b6ffe6", fontFamily: "inherit" }}>
                  Books meetings instantly
                  <span title="AI agents can book meetings in seconds, no waiting or back-and-forth.">
                    <svg width="16" height="16" style={{ verticalAlign: "middle" }}><circle cx="8" cy="8" r="8" fill="#7f5cff"/><text x="8" y="12" textAnchor="middle" fontSize="12" fill="#fff">i</text></svg>
                  </span>
                </td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#ff00cc", fontFamily: "inherit" }}>❌</td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#00fff7", fontFamily: "inherit" }}>✅</td>
              </tr>
              <tr>
                <td style={{ padding: "0.6rem 1.2rem", display: "flex", alignItems: "center", gap: 6, color: "#b6ffe6", fontFamily: "inherit" }}>
                  Analyzes conversation data
                  <span title="AI agents provide insights and analytics from every conversation.">
                    <svg width="16" height="16" style={{ verticalAlign: "middle" }}><circle cx="8" cy="8" r="8" fill="#7f5cff"/><text x="8" y="12" textAnchor="middle" fontSize="12" fill="#fff">i</text></svg>
                  </span>
                </td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#ff00cc", fontFamily: "inherit" }}>❌</td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#00fff7", fontFamily: "inherit" }}>✅</td>
              </tr>
              <tr style={{ background: "#23234a" }}>
                <td style={{ padding: "0.6rem 1.2rem", display: "flex", alignItems: "center", gap: 6, color: "#b6ffe6", fontFamily: "inherit" }}>
                  Cost per month
                  <span title="AI agents are more affordable than hiring additional staff.">
                    <svg width="16" height="16" style={{ verticalAlign: "middle" }}><circle cx="8" cy="8" r="8" fill="#7f5cff"/><text x="8" y="12" textAnchor="middle" fontSize="12" fill="#fff">i</text></svg>
                  </span>
                </td>
                <td style={{ textAlign: "center", fontSize: "1.1rem", color: "#ff00cc", fontFamily: "inherit" }}>$ $$$</td>
                <td style={{ textAlign: "center", fontSize: "1.3rem", color: "#00fff7", fontFamily: "inherit" }}>💸</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Live Demo Tabs */}
      <section style={{ padding: "2.5rem 1rem", background: "rgb(35, 35, 74)" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#7f5cff",
          fontWeight: 700,
          fontFamily: "inherit"
        }}>
          Try an AI Agent
        </h2>
        <div style={{
          textAlign: "center",
          color: "#23234a",
          marginBottom: "2rem",
          fontSize: "1.1rem"
        }}>
          Interact live with our AI teammates below. See how they handle real business tasks!
        </div>
        <LiveDemoTabs />
      </section>
   
      {/* 6. Social Proof */}
      <section style={{ padding: "2.5rem 1rem", background: "#23234a" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2.2rem",
          color: "#00fff7",
          fontWeight: 700,
          fontFamily: "inherit"
        }}>
          Real Businesses. Real Results.
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center"
        }}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>E-commerce Lead Gen</h3>
            <div style={chatPreviewStyle}>
              <div style={userMsgStyle}>Hi, I\'m looking for a summer dress.</div>
              <div style={aiMsgStyle}>Sure! Here are some trending options. What\'s your size?</div>
              <div style={userMsgStyle}>Medium.</div>
              <div style={aiMsgStyle}>Great! Added a few to your cart. Need help with checkout?</div>
            </div>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Healthcare Support</h3>
            <div style={chatPreviewStyle}>
              <div style={userMsgStyle}>I need to book a dental appointment.</div>
              <div style={aiMsgStyle}>Happy to help! What date works for you?</div>
              <div style={userMsgStyle}>Next Monday.</div>
              <div style={aiMsgStyle}>Booked for Monday at 10am. Anything else I can assist with?</div>
            </div>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Real Estate Inquiry</h3>
            <div style={chatPreviewStyle}>
              <div style={userMsgStyle}>Do you have 2-bedroom apartments?</div>
              <div style={aiMsgStyle}>Yes! Would you like to schedule a viewing?</div>
              <div style={userMsgStyle}>Yes, this weekend.</div>
              <div style={aiMsgStyle}>Viewing scheduled for Saturday at 2pm. See you then!</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <div style={{ color: "#b6ffe6", fontSize: "1.2rem", marginBottom: "1.2rem" }}>
            Your business could be next. Let’s match you with the perfect AI teammate.
          </div>
          <a
            href="https://wa.me/923359112095"
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg,#7f5cff,#00fff7)",
              color: "#181824",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: 32,
              fontSize: "1.2rem",
              textDecoration: "none",
              marginTop: "1rem",
              boxShadow: "0 4px 24px #00fff733"
            }}
          >
            Book Free Strategy Call
          </a>
        </div>
      </section>
   
      {/* 7. Final CTA
      <section style={{ padding: "3rem 1rem", background: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "1.2rem" }}>
          Not sure which agent is right for you? Let’s talk.
        </div>
        <a
          href="https://wa.me/923359112095"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg,#7f5cff,#00fff7)",
            color: "#181824",
            fontWeight: 700,
            padding: "1rem 2.5rem",
            borderRadius: 32,
            fontSize: "1.2rem",
            textDecoration: "none",
            marginTop: "1rem",
            boxShadow: "0 4px 24px #00fff733"
          }}
        >
          Book Your Free Strategy Call
        </a>
      </section> */}
    </main>
  );
}

export default AIAutomationAgents;


// Place this component above your main function or at the bottom of the file
function LiveDemoTabs() {
  const demos = [
    {
      tab: "Lead Gen",
      agent: "Nova",
      intro: "Hi! 👋 I’m Nova, your lead generation assistant. Want to learn more about our services or book a call?",
      conversation: [
        { from: "user", text: "Can you tell me about your pricing?" },
        { from: "ai", text: "Absolutely! We offer flexible plans starting at $49/month. Would you like a detailed breakdown or to schedule a call with our team?" }
      ]
    },
    {
      tab: "Support",
      agent: "Echo",
      intro: "Hello! I’m Echo, your 24/7 support agent. How can I help you today?",
      conversation: [
        { from: "user", text: "I need help with my order." },
        { from: "ai", text: "Of course! Can you share your order number? I’ll check the status right away." }
      ]
    },
    {
      tab: "Booking",
      agent: "Luna",
      intro: "Hi! 👋 I’m Luna, your booking assistant. Want to schedule a tour or ask a question?",
      conversation: [
        { from: "user", text: "Can I book a tour for tomorrow?" },
        { from: "ai", text: "Yes! What time works best for you? I’ll reserve your spot and send a confirmation." }
      ]
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {demos.map((demo, i) => (
          <button
            key={demo.tab}
            onClick={() => setActiveIdx(i)}
            style={{
              padding: "0.7rem 1.5rem",
              borderRadius: 24,
              border: "none",
              background: activeIdx === i ? "#7f5cff" : "#23234a",
              color: activeIdx === i ? "#fff" : "#b6ffe6",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {demo.tab}
          </button>
        ))}
      </div>
      <div style={{
        maxWidth: 400,
        margin: "0 auto",
        background: "#23234a",
        borderRadius: 16,
        padding: "1.5rem 1rem",
        boxShadow: "0 2px 16px #7f5cff33"
      }}>
        <div style={{ color: "#00fff7", fontWeight: 600, marginBottom: 8 }}>
          AI Agent: <span style={{ color: "#b6ffe6" }}>{demos[activeIdx].agent}</span>
        </div>
        <div style={{ color: "#b6ffe6", marginBottom: 12 }}>
          “{demos[activeIdx].intro}”
        </div>
        <div>
          {demos[activeIdx].conversation.map((msg, idx) => (
            <div key={idx} style={{
              textAlign: msg.from === "ai" ? "left" : "right",
              margin: "0.5rem 0"
            }}>
              <span style={{
                display: "inline-block",
                background: msg.from === "ai" ? "#181824" : "#7f5cff",
                color: msg.from === "ai" ? "#b6ffe6" : "#fff",
                borderRadius: 16,
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                maxWidth: "80%",
                wordBreak: "break-word"
              }}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AgentBuilder() {
  const goals = ["Support", "Sales", "Bookings", "Content"];
  const tones = ["Friendly", "Professional", "Humorous"];
  const tools = ["WhatsApp", "Email", "Website", "Social"];

  const [selectedGoal, setSelectedGoal] = useState(goals[0]);
  const [selectedTone, setSelectedTone] = useState(tones[0]);
  const [selectedTools, setSelectedTools] = useState([tools[0]]);

  function toggleTool(tool) {
    setSelectedTools((prev) =>
      prev.includes(tool)
        ? prev.filter((t) => t !== tool)
        : [...prev, tool]
    );
  }

  const message = encodeURIComponent(
    `Hi! I want an AI agent.\nGoal: ${selectedGoal}\nTone: ${selectedTone}\nTools: ${selectedTools.join(", ")}`
  );

  return (
    <div className="agent-builder-container" style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
      <div className="agent-builder-card">
        <div className="agent-builder-step-title ai-gradient">1. Pick your goal</div>
        <ul>
          {goals.map(goal => (
            <li key={goal}>
              <button
                type="button"
                className={`agent-builder-btn${selectedGoal === goal ? " selected" : ""}`}
                onClick={() => setSelectedGoal(goal)}
              >
                {goal}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="agent-builder-card">
        <div className="agent-builder-step-title ai-gradient">2. Choose your tone</div>
        <ul>
          {tones.map(tone => (
            <li key={tone}>
              <button
                type="button"
                className={`agent-builder-btn${selectedTone === tone ? " selected" : ""}`}
                onClick={() => setSelectedTone(tone)}
              >
                {tone}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="agent-builder-card">
        <div className="agent-builder-step-title ai-gradient">3. Connect your tools</div>
        <ul>
          {tools.map(tool => (
            <li key={tool}>
              <button
                type="button"
                className={`agent-builder-btn${selectedTools.includes(tool) ? " selected" : ""}`}
                onClick={() => toggleTool(tool)}
              >
                {tool}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="agent-builder-card agent-builder-preview">
        <div className="ai-gradient" style={{ fontWeight: 600, marginBottom: 8 }}>Your AI Agent Preview:</div>
        <div style={{ color: "#b6ffe6", fontSize: "1.1rem", marginBottom: 12 }}>
          <strong>Goal:</strong> {selectedGoal} <br />
          <strong>Tone:</strong> {selectedTone} <br />
          <strong>Tools:</strong> {selectedTools.join(", ")}
        </div>
        <div className="agent-builder-message-preview" style={{
          background: "#23234a",
          borderRadius: 12,
          padding: "1rem",
          fontStyle: "italic",
          color: "#00fff7",
          fontSize: "1.05rem",
          boxShadow: "0 1px 8px #7f5cff11"
        }}>
          {selectedGoal === "Support" && selectedTone === "Friendly" && (
            <>Hi there! 😊 How can I help you today? (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Support" && selectedTone === "Professional" && (
            <>Hello, thank you for reaching out. How may I assist you? (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Support" && selectedTone === "Humorous" && (
            <>Hey! Need a hand? Or a robot arm? 😄 (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Sales" && selectedTone === "Friendly" && (
            <>Hi! 👋 Looking for something special? I can help you find the best deals! (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Sales" && selectedTone === "Professional" && (
            <>Hello, I’m here to assist you with your purchase decisions. (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Sales" && selectedTone === "Humorous" && (
            <>Ready to shop till you drop? I’ll catch the best deals for you! 🛒 (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Bookings" && selectedTone === "Friendly" && (
            <>Hey! Want to book a slot? I’ll make it super easy for you! 📅 (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Bookings" && selectedTone === "Professional" && (
            <>Hello, I can assist you in scheduling your appointment. (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Bookings" && selectedTone === "Humorous" && (
            <>Let’s get you on the calendar—no time machines required! 😁 (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Content" && selectedTone === "Friendly" && (
            <>Hi! Ready to create some awesome content together? (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Content" && selectedTone === "Professional" && (
            <>Hello, I can help you plan and schedule your content efficiently. (Available on {selectedTools.join(", ")})</>
          )}
          {selectedGoal === "Content" && selectedTone === "Humorous" && (
            <>Let’s make your content go viral—no cat videos required! 😸 (Available on {selectedTools.join(", ")})</>
          )}
        </div>
        <a
          href={`https://wa.me/923359112095?text=${message}`}
          className="cta-btn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg,#7f5cff,#00fff7)",
            color: "#181824",
            fontWeight: 700,
            padding: "1rem 2.5rem",
            borderRadius: 32,
            fontSize: "1.1rem",
            textDecoration: "none",
            marginTop: "1rem",
            boxShadow: "0 4px 24px #00fff733"
          }}
        >
          Talk to an AI Consultant
        </a>
      </div>
    </div>
  );
}

<div style={{ marginTop: 16, marginBottom: 10 }}>
  <iframe width="100%" height="180" src="https://www.youtube.com/embed/2Q0WcQ5J5Ww" title="AI Real Estate Agent Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

const cardStyle = {
  background: "#181824",
  borderRadius: 16,
  boxShadow: "0 2px 16px #00fff744",
  padding: "1.5rem 1rem",
  color: "#fff",
  minWidth: 260,
  maxWidth: 340,
  flex: "1 1 260px",
  marginBottom: "1.5rem"
};
const cardTitleStyle = {
  color: "#00fff7",
  fontWeight: 700,
  fontSize: "1.15rem",
  marginBottom: 12
};
const chatPreviewStyle = {
  background: "#23234a",
  borderRadius: 12,
  padding: "1rem",
  marginBottom: 8,
  boxShadow: "0 1px 8px #7f5cff11"
};
const userMsgStyle = {
  background: "#7f5cff",
  color: "#fff",
  borderRadius: 16,
  padding: "0.5rem 1rem",
  margin: "0.5rem 0",
  alignSelf: "flex-end",
  maxWidth: "80%",
  textAlign: "right"
};
const aiMsgStyle = {
  background: "#181824",
  color: "#b6ffe6",
  borderRadius: 16,
  padding: "0.5rem 1rem",
  margin: "0.5rem 0",
  alignSelf: "flex-start",
  maxWidth: "80%",
  textAlign: "left"
};
