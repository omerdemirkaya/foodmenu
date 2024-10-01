import "./Menu.css";

const menuData = [
  {
    category: "ÖZEL LEZZETLER",
    items: [
      { name: "Ankara Tava", price: "230₺" },
      { name: "Çiğ Köfte (kg)", price: "200₺" },
      { name: "Çiğ Köfte (Porsiyon)", price: "50₺" },
      { name: "Çiğ Köfte (Dürüm)", price: "60₺" },
      { name: "Mantı (kg)", price: "300₺" },
      { name: "Mantı (Porsiyon)", price: "50₺" },
      { name: "İçli Köfte (adet)", price: "50₺" },
      { name: "Yaprak Sarma(kg)", price: "200₺" },
      { name: "Yaprak Sarma (Porsiyon)", price: "50₺" },
      { name: "Baklava (kg)", price: "350₺" },
      { name: "Baklava (Porsiyon)", price: "70₺" },
      { name: "Waffle", price: "70₺" },
      { name: "Höşmerim", price: "60₺" },
      { name: "Gözleme", price: "40₺" },
      { name: "Bazlama", price: "15₺" },
      { name: "Aşure", price: "50₺" },
      { name: "Dondurma (kg)", price: "250₺" },
      { name: "Dondurma (top)", price: "15₺" }
    ]
  },
  {
    category: "DÖNER ÜRÜNLERİ",
    items: [
      { name: "Et Döner Ekmek Arası", price: "150₺" },
      { name: "Et Döner Lavaş Dürüm", price: "150₺" },
      { name: "Et Döner Servis", price: "170₺" },
      { name: "Tavuk Döner Ekmek Arası", price: "120₺" },
      { name: "Tavuk Döner Lavaş Dürüm", price: "120₺" },
      { name: "Tavuk Döner Servis", price: "140₺" },
      { name: "Hatay Usulü Tavuk Dürüm", price: "140₺" },
      { name: "Et İskender", price: "200₺" },
      { name: "Tavuk İskender", price: "170₺" },
      { name: "Et Döner (kg)", price: "1500₺" },
      { name: "Tavuk Döner (kg)", price: "900₺" }
    ]
  },
  {
    category: "PİDE VE IZGARA ÇEŞİTLERİ",
    items: [
      { name: "Lahmacun", price: "75₺" },
      { name: "Kıymalı Pide", price: "130₺" },
      { name: "Kapalı Et Dönerli Pide", price: "200₺" },
      { name: "Karışık-Kuşbaşılı Pide", price: "180₺" },
      { name: "Orta Boy Pizza", price: "130₺" },
      { name: "Köfte (Ekmek Arası)", price: "130₺" },
      { name: "Köfte Servis", price: "150₺" },
      { name: "Adana Dürüm", price: "175₺" },
      { name: "Adana Servis", price: "200₺" },
      { name: "Pirzola", price: "200₺" }
    ]
  },
  {
    category: "ÇORBALAR",
    items: [
      { name: "Gerdan Çorbası", price: "75₺" }
    ]
  },
  {
    category: "İÇECEKLER",
    items: [
      { name: "Su", price: "5₺" },
      { name: "Sade Soda", price: "15₺" },
      { name: "Kapalı Ayran", price: "10₺" },
      { name: "Açık Ayran", price: "20₺" },
      { name: "Niğde Gazozu", price: "25₺" },
      { name: "Şalgam", price: "25₺" },
      { name: "Milkshake", price: "80₺" },
      { name: "Termos Çay", price: "70₺" }
    ]
  }
];

const MenuCategory = ({ category, items }) => (
    <div className="menu-category">
      <h2 className="category-title" style={{textAlign:"center", padding:"15px"}}>{category}</h2>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
  const Menu = () => (
    <div className="menu-container">
      <h1 className="menu-title">Kermes Menüsü</h1>
      <div className="menu-pages">
        {menuData.map((category, index) => (
          <MenuCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );

export default Menu;