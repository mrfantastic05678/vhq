export const metadata = {
  title: "Terms of Service | Voice of Holy Quran",
  description: "Terms of Service for Voice of Holy Quran Academy",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
          <h1 className="text-3xl md:text-4xl font-bold text-[#001948] mb-6">Terms of Service</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-[#001948] mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the Voice of Holy Quran Academy website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>

            <h2 className="text-xl font-semibold text-[#001948] mt-8 mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Voice of Holy Quran Academy provides online Islamic and Quranic education, including but not limited to Tajweed, Hifz, Arabic Language, and Islamic Studies. Our services include live classes, study materials, and assessments.
            </p>

            <h2 className="text-xl font-semibold text-[#001948] mt-8 mb-4">3. Enrollment and Fees</h2>
            <p className="mb-4">
              Enrollment in our courses is subject to availability and acceptance by the Academy. Fees for courses must be paid in advance as per the agreed schedule. We reserve the right to change our fee structure with appropriate notice.
            </p>

            <h2 className="text-xl font-semibold text-[#001948] mt-8 mb-4">4. Student Conduct</h2>
            <p className="mb-4">
              Students are expected to maintain appropriate behavior during classes. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Being punctual for scheduled classes.</li>
              <li>Dressing modestly during video sessions.</li>
              <li>Showing respect to teachers and staff.</li>
              <li>Not recording or sharing class sessions without explicit permission.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#001948] mt-8 mb-4">5. Cancellation and Refund Policy</h2>
            <p className="mb-4">
              If you wish to cancel your enrollment, please provide reasonable notice. Refunds for unused classes or cancellations will be handled according to our current refund policy, available upon request.
            </p>

            <h2 className="text-xl font-semibold text-[#001948] mt-8 mb-4">6. Modifications to Terms</h2>
            <p className="mb-4">
              Voice of Holy Quran Academy reserves the right to modify these terms at any time. We will notify users of any significant changes. Your continued use of the service after such modifications constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
