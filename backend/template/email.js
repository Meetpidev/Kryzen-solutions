export function email(formData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; padding:20px; border-radius:8px; background:#f9f9f9;">
      <h2 style="color:#2c7be5; text-align:center;">🌟 New Meeting Scheduled 🌟</h2>
      <p>Hi,</p>
      <p>A new meeting request has been submitted with the following details:</p>
      <table style="width:100%; border-collapse: collapse; margin-top:20px;">
        <tbody>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Your Name:</td>
            <td style="padding: 8px;">${formData.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Email:</td>
            <td style="padding: 8px;">${formData.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Mobile Number:</td>
            <td style="padding: 8px;">${formData.mobile}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Interested Service:</td>
            <td style="padding: 8px;">${formData.service}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Project Budget:</td>
            <td style="padding: 8px;">${formData.budget}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Project Type:</td>
            <td style="padding: 8px;">${formData.type}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px; font-weight:bold;">Project Details:</td>
            <td style="padding: 8px;">${formData.details}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight:bold;">Subscribed to Newsletter:</td>
            <td style="padding: 8px;">${formData.newsletter ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 20px;">Best regards,<br/>Kryzen Software Solutions</p>
    </div>
  `;
}
