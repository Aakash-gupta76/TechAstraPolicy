import React from 'react';

export default function App() {
  const appName = "TechAstra";
  const packageName = "com.aistudio.techastra.bkpyqs";
  const contactEmail = "aakasgupta89@gmail.com";
  const effectiveDate = "March 15, 2025";

  return (
    <div className="min-h-screen bg-white text-gray-800 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <main className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base leading-relaxed">
        
        {/* Document Header */}
        <header className="border-b border-gray-200 pb-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-1">
            Application: <strong>{appName}</strong>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
            Package Name: <code className="font-mono text-gray-700">{packageName}</code>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
            Effective Date: {effectiveDate}
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">1. Introduction</h2>
          <p>
            This Privacy Policy governs your use of the mobile application <strong>{appName}</strong> ("Application", "we", "us", or "our"), created for Android devices. The Application is an educational platform providing engineering students with study notes, previous year examination question papers (PYQs), and sessional exam resources.
          </p>
          <p>
            By downloading, accessing, or using the Application, you consent to the collection and use of information in accordance with this policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">2. Information Collection and Use</h2>
          <p>
            We collect the minimum amount of information necessary to provide and improve the Application's educational services:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li>
              <strong>Personal Information:</strong> When you sign in using Google Sign-In, we receive your basic profile details (your name and email address) managed via Firebase Authentication. We do not collect or store your Google account password.
            </li>
            <li>
              <strong>Academic Information:</strong> You may provide information such as your college name, engineering branch/department, and current semester. This information is used solely to filter and organize relevant study notes, syllabus guidelines, and previous question papers.
            </li>
            <li>
              <strong>Log and Device Data:</strong> When you use the Application, non-personally identifiable diagnostic data may be collected automatically, including your device model, operating system version, and system crash logs to ensure application stability and fix errors.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">3. Third-Party Services</h2>
          <p>
            The Application utilizes third-party services provided by Google LLC to handle authentication, database storage, and app distribution. These third parties may collect information used to identify you in accordance with their respective privacy policies:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li>
              <strong>Google Play Services:</strong> Used for core Android platform functionality.
            </li>
            <li>
              <strong>Google Sign-In &amp; Firebase Authentication:</strong> Used for secure student login and identity verification.
            </li>
            <li>
              <strong>Google Cloud Firestore:</strong> Used for cloud-based storage of study notes metadata and syllabus content.
            </li>
          </ul>
          <p>
            For more details, please review Google's Privacy Policy at{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://policies.google.com/privacy
            </a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">4. Device Permissions</h2>
          <p>
            The Application requests only standard network-related permissions necessary to load study resources:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">android.permission.INTERNET</code>: Required to access online educational materials, question papers, and database records.
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">android.permission.ACCESS_NETWORK_STATE</code>: Required to check network connectivity before attempting to download resources.
            </li>
          </ul>
          <p>
            The Application does <strong>NOT</strong> request or access sensitive device capabilities, such as Camera, Microphone, GPS Location, Contacts, SMS, or External Device Storage.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">5. Data Security</h2>
          <p>
            We value your trust in providing us with your information. All data transmitted between the Application and cloud servers is encrypted using industry-standard HTTPS (Transport Layer Security - TLS). We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">6. Data Retention and Deletion</h2>
          <p>
            We retain your profile and academic preferences for as long as your account is active. In compliance with Google Play's user data policies, you have the right to request the permanent deletion of your account and all associated personal data.
          </p>
          <p>
            To request account and data deletion, please send an email to{' '}
            <a href={`mailto:${contactEmail}`} className="text-blue-600 underline font-medium">
              {contactEmail}
            </a>{' '}
            with the subject line: <strong>"Account Deletion Request - TechAstra"</strong> from the email address linked to your account. Your account and stored data will be permanently deleted from our servers within 14 business days of receipt of your request.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">7. Children's Privacy</h2>
          <p>
            The Application is designed for college and university engineering students. It does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately remove this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes. Any revisions will be effective immediately upon being posted on this page with the updated effective date.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-2 border-t border-gray-200 pt-5">
          <h2 className="text-lg font-semibold text-gray-900">9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-900">
            Email:{' '}
            <a href={`mailto:${contactEmail}`} className="text-blue-600 underline font-medium">
              {contactEmail}
            </a>
          </p>
        </section>

      </main>
    </div>
  );
}
