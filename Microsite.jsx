import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BTMicrosite() {
  const [lang, setLang] = useState("tr");

  const isTR = lang === "tr";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fcfcfb] to-[#f0eeee] p-6 font-sans text-gray-800">
      <section className="text-center max-w-2xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-4">
          {isTR
            ? "Fakirliğe Son Vermek İçin Yeni Bir Model: B&T"
            : "A New Model to End Poverty: B&T"}
        </h1>
        <p className="text-lg mb-6">
          {isTR
            ? "Gençler şirket kurmadan, sermaye harcamadan gelir elde ediyor."
            : "Young people earn income without starting a company or spending capital."}
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-white bg-black rounded-2xl px-6 py-2">
            {isTR ? "Impact Deck’i İncele" : "View Impact Deck"}
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl px-6 py-2"
            onClick={() => setLang(isTR ? "en" : "tr")}
          >
            {isTR ? "View in English" : "Türkçe Görüntüle"}
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto py-12">
        <Card><CardContent className="p-6">
          <h2 className="font-bold text-lg mb-2">
            {isTR ? "7 milyon genç işsiz" : "7 million unemployed youth"}
          </h2>
          <p>{isTR ? "Sosyal becerili ama sistem dışı." : "Social skills, but excluded from the system."}</p>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <h2 className="font-bold text-lg mb-2">
            {isTR ? "Markalar erişim arıyor" : "Brands seek reach"}
          </h2>
          <p>{isTR ? "Reklam değil, güven arıyorlar." : "They seek trust, not ads."}</p>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <h2 className="font-bold text-lg mb-2">
            {isTR ? "B&T farkı" : "The B&T Difference"}
          </h2>
          <p>{isTR ? "Şirket yok, sermaye yok, ama sürdürülebilir gelir var." : "No company, no capital, yet sustainable income."}</p>
        </CardContent></Card>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">15,000+</h3>
            <p>{isTR ? "Kayıtlı Genç" : "Registered Youth"}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">$300,000</h3>
            <p>{isTR ? "Brüt Gelir" : "Gross Revenue"}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">$120,000</h3>
            <p>{isTR ? "Prim Ödemesi" : "Commissions Paid"}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">40+</h3>
            <p>{isTR ? "Marka İşbirliği" : "Partner Brands"}</p>
          </div>
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">
          {isTR ? "Sadece paylaşarak kazanmak mümkün." : "It’s possible to earn just by sharing."}
        </h2>
        <p className="mb-6">
          {isTR
            ? "B&T, sosyal güvene dayalı ilk gelir paylaşım ağıdır. Platformun büyümesi için seninle ilerleyelim."
            : "B&T is the first income-sharing network built on social trust. Let’s grow the platform together."}
        </p>
        <Button className="text-white bg-black rounded-2xl px-8 py-3">
          {isTR ? "Görüşme Planla" : "Schedule a Call"}
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Brand & Trend. {isTR ? "Tüm hakları saklıdır." : "All rights reserved."}
      </footer>
    </main>
  );
}