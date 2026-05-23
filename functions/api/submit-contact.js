export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    // Use Web3Forms for the easiest setup with no strict domain verification needed.
    // 1. Go to https://web3forms.com
    // 2. Enter sales@manomayglobalsolutions.com to get your Access Key
    // 3. Add WEB3FORMS_ACCESS_KEY to your Cloudflare Pages Environment Variables
    
    if (!env.WEB3FORMS_ACCESS_KEY) {
      throw new Error("Missing WEB3FORMS_ACCESS_KEY environment variable. Please add it in Cloudflare Pages settings.");
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        subject: `New ERP Lead: ${data.firstName} ${data.lastName} - ${data.companyName}`,
        from_name: `${data.firstName} ${data.lastName}`,
        replyto: data.email,
        First_Name: data.firstName,
        Last_Name: data.lastName,
        Email: data.email,
        Mobile: `${data.countryCode} ${data.mobile}`,
        Company: data.companyName,
        Industry: data.industry,
        Location: data.companyAddress,
        Request_Type: data.requestType,
        ERP_Preference: data.erpPreference,
        Business_Needs: data.businessNeeds || 'N/A'
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(`Failed to send email: ${result.message || response.status}`);
    }

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
