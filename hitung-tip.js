function kalkulatorTip(tagihan) {
  const persenTip = (tagihan >= 50 && tagihan <= 300) ? 0.15 : 0.2;
  const tip = tagihan * persenTip;
  const totalTagihan = tagihan + tip;

  console.log(`Tagihannya ${tagihan}, tipnya ${tip.toFixed(2)}, dan total nilainya ${totalTagihan.toFixed(2)}`);
}

// Data uji
const tagihan1 = 275;
const tagihan2 = 40;
const tagihan3 = 430;

kalkulatorTip(tagihan1);
kalkulatorTip(tagihan2);
kalkulatorTip(tagihan3);
