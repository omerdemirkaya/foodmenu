import "./Menu.css";

const menuData = [
  {
    category: "DÖNER ÜRÜNLERİ",
    items: [
      { name: "Et Döner Ekmek Arası", price: "140₺" },
      { name: "Et Döner Lavaş Dürüm", price: "140₺" },
      { name: "Et Döner Servis", price: "170₺" },
      { name: "Tavuk Döner Ekmek Arası", price: "110₺" },
      { name: "Tavuk Döner Lavaş Dürüm", price: "110₺" },
      { name: "Tavuk Döner Servis", price: "130₺" },
      { name: "Hatay Usulü Tavuk Dürüm", price: "140₺" },
      { name: "Et İskender", price: "200₺" },
      { name: "Tavuk İskender", price: "150₺" },
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
      { name: "Köfte (Ekmek Arası)", price: "130₺" },
      { name: "Köfte Servis", price: "140₺" },
      { name: "Adana Dürüm", price: "170₺" },
      { name: "Adana Servis", price: "170₺" },
      { name: "Pirzola", price: "200₺" },
      { name: "Pizza", price: "130₺"}
    ]
  },
  {
    category: "ÖZEL LEZZETLER",
    items: [
      { name: "Ankara Tava", price: "200₺" },
      { name: "Çiğ Köfte (kg)", price: "200₺" },
      { name: "Çiğ Köfte (Porsiyon)", price: "50₺" },
      { name: "Çiğ Köfte (Dürüm)", price: "40₺" },
      { name: "Mantı (kg)", price: "??₺" },
      { name: "Mantı (Porsiyon)", price: "??₺" },
      { name: "İçli Köfte (adet)", price: "??₺" },
      { name: "Yaprak Sarma(kg)", price: "??₺" },
      { name: "Yaprak Sarma (Porsiyon)", price: "??₺" },
      { name: "Baklava (kg)", price: "??₺" },
      { name: "Baklava (Porsiyon)", price: "??₺" },
      { name: "Waffle", price: "??₺" },
      { name: "Höşmerim", price: "??₺" },
      { name: "Gözleme", price: "??₺" },
      { name: "Bazlama", price: "??₺" },
      { name: "Aşure", price: "??₺" },
      { name: "Dondurma (kg)", price: "??₺" },
      { name: "Dondurma (top)", price: "??₺" }
    ]
  },
  {
    category: "ÇORBALAR",
    items: [
      { name: "Gerdan Çorbası", price: "80₺" },
      { name: "Mercimek Çorbası", price: "70₺"}
    ]
  },
  {
    category: "İÇECEKLER",
    items: [
      { name: "Su", price: "5₺" },
      { name: "Sade Soda", price: "15₺" },
      { name: "Kapalı Ayran", price: "10₺" },
      { name: "Yayık Ayran", price: "20₺" },
      { name: "Gazoz", price: "20₺" },
      { name: "Kızılcık Şerbeti", price: "20₺" },
      { name: "Limonata", price: "20₺" },
      { name: "Çay", price: "5₺" }
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
