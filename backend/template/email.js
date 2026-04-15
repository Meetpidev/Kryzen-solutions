function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatLabel(label) {
  return `<td style="padding:8px; font-weight:bold; width:40%;">${escapeHtml(label)}</td>`;
}

function formatValue(value) {
  return `<td style="padding:8px;">${escapeHtml(value || "-")}</td>`;
}

function renderRows(fields) {
  return fields
    .map(
      ({ label, value }) => `
        <tr style="border-bottom: 1px solid #ddd;">
          ${formatLabel(label)}
          ${formatValue(value)}
        </tr>
      `
    )
    .join("");
}

function renderCard({ title, intro, rows, footer }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; padding:20px; border-radius:8px; background:#f9f9f9; color:#222;">
      <h2 style="color:#2c7be5; text-align:center; margin-top:0;">${escapeHtml(title)}</h2>
      <p>${escapeHtml(intro)}</p>
      <table style="width:100%; border-collapse: collapse; margin-top:20px; background:#fff;">
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="margin-top: 20px;">${escapeHtml(footer)}</p>
    </div>
  `;
}

function formatPhone(formData) {
  const parts = [formData.countryCode, formData.phone || formData.mobile].filter(Boolean);
  return parts.length ? parts.join(" ") : "-";
}

export function meetingOwnerEmail(formData) {
  return renderCard({
    title: "New Meeting Scheduled",
    intro: "A new meeting request has been submitted with the following details:",
    rows: renderRows([
      { label: "Name", value: formData.name },
      { label: "Email", value: formData.email },
      { label: "Mobile Number", value: formatPhone(formData) },
      { label: "Interested Service", value: formData.service },
      { label: "Project Budget", value: formData.budget },
      { label: "Project Type", value: formData.type },
      { label: "Project Details", value: formData.details },
      { label: "Subscribed to Newsletter", value: formData.newsletter ? "Yes" : "No" },
    ]),
    footer: "Please review this lead and contact the client soon.",
  });
}

export function meetingUserEmail(formData) {
  return renderCard({
    title: "Meeting Request Received",
    intro: `Hi ${formData.name || "there"}, we have received your meeting request.`,
    rows: renderRows([
      { label: "Service", value: formData.service },
      { label: "Project Budget", value: formData.budget },
      { label: "Project Type", value: formData.type },
      { label: "Project Details", value: formData.details },
    ]),
    footer: "Our team will review your request and contact you shortly. Thank you for connecting with Kryzen Software Solutions.",
  });
}

export function contactOwnerEmail(formData) {
  const source = formData.formType || "Website Contact Form";

  return renderCard({
    title: `New Enquiry From ${source}`,
    intro: "A new website enquiry has been submitted. Please review the lead details below.",
    rows: renderRows([
      { label: "Name", value: formData.name || "Not provided" },
      { label: "Email", value: formData.email },
      { label: "Phone", value: formatPhone(formData) },
      { label: "Message", value: formData.message },
      { label: "Source", value: source },
    ]),
    footer: "Please respond to this enquiry and follow up with the prospect soon.",
  });
}

export function contactUserEmail(formData) {
  const source = formData.formType || "Website Contact Form";

  return renderCard({
    title: "We Received Your Enquiry",
    intro: `Hi ${formData.name || "there"}, thank you for contacting Kryzen Software Solutions. This is a confirmation that our team received your request.`,
    rows: renderRows([
      { label: "Name", value: formData.name || "Not provided" },
      { label: "Email", value: formData.email },
      { label: "Phone", value: formatPhone(formData) },
      { label: "Your Message", value: formData.message },
      { label: "Submitted From", value: source },
    ]),
    footer: "Our team will review your message and get back to you shortly.",
  });
}

export function careerOwnerEmail(formData) {
  return renderCard({
    title: "New Career Application",
    intro: "A new career application has been submitted from the website.",
    rows: renderRows([
      { label: "Role", value: formData.role },
      { label: "Name", value: formData.name },
      { label: "Email", value: formData.email },
      { label: "Mobile Number", value: formatPhone(formData) },
      { label: "Experience", value: formData.experience },
      { label: "Qualification", value: formData.qualification },
      { label: "Degree Result", value: formData.degreeResult },
      { label: "10th Result", value: formData.tenthResult },
      { label: "12th/Diploma Result", value: formData.twelfthResult },
    ]),
    footer: "Please review the resume attachment and follow up with the candidate if suitable.",
  });
}

export function careerUserEmail(formData) {
  return renderCard({
    title: "Application Received",
    intro: `Hi ${formData.name || "there"}, your application has been received successfully. Thank you for your interest in joining Kryzen Software Solutions.`,
    rows: renderRows([
      { label: "Applied Role", value: formData.role || "General Application" },
      { label: "Email", value: formData.email },
      { label: "Mobile Number", value: formatPhone(formData) },
      { label: "Experience", value: formData.experience },
      { label: "Qualification", value: formData.qualification },
    ]),
    footer: "Our recruitment team will review your application and contact you if your profile matches our requirements.",
  });
}
