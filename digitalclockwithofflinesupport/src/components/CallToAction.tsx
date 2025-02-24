import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="cta">
      <h2 className="text-2xl font-semibold">🚀 Ready to Wake Up on Time?</h2>
      <p className="mt-2">Try our smart alarm now and never miss an important moment!</p>
      <Link href="/alarm">
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">Get Started</button>
      </Link>
    </section>
  );
}
