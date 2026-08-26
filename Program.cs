using System.Text.Json;
using System.Text.Json.Nodes;
using Microsoft.Extensions.FileProviders;
using ArabaSatisDB;

var builder = WebApplication.CreateBuilder(args);

// Render.com PORT env değişkenini kullan, yoksa 3000 (local geliştirme için)
var port = Environment.GetEnvironmentVariable("PORT") ?? "3000";
builder.WebHost.UseUrls($"http://*:{port}");

// Enable CORS for localhost access
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

// Serve static web assets directly from the project root directory
var fileProvider = new PhysicalFileProvider(app.Environment.ContentRootPath);

app.UseDefaultFiles(new DefaultFilesOptions
{
    FileProvider = fileProvider
});

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = fileProvider
});

string dataFilePath = Path.Combine(app.Environment.ContentRootPath, "database.json");

// Helper to load or initialize JSON database
JsonNode LoadDatabase()
{
    if (File.Exists(dataFilePath))
    {
        try
        {
            string content = File.ReadAllText(dataFilePath);
            var node = JsonNode.Parse(content);
            if (node != null) return node;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"[DB WARN] Error reading database.json: {ex.Message}");
        }
    }

    var initialDb = GetInitialDatabaseNode();
    SaveDatabase(initialDb);
    return initialDb;
}

void SaveDatabase(JsonNode node)
{
    try
    {
        string json = node.ToJsonString(new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(dataFilePath, json);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"[DB ERROR] Failed to save database.json: {ex.Message}");
    }
}

JsonNode GetInitialDatabaseNode()
{
    string jsonString = """
    {
      "Personeller": [
        { "PersonelID": 1, "Adi": "Barış", "Soyadi": "Yalçın", "Tc_No": "11111111111", "Gmail": "yalcinbaris548@gmail.com", "Telefon": "0532 555 0001", "Adres": "Kadıköy / İstanbul", "Gorev": "Satış Müdürü (Yönetici)", "Calisma_Durumu": 1 },
        { "PersonelID": 2, "Adi": "Erenalp", "Soyadi": "Kılıç", "Tc_No": "22222222222", "Gmail": "e67818077@gmail.com", "Telefon": "0533 444 0002", "Adres": "Çankaya / Ankara", "Gorev": "Kıdemli Satış Danışmanı", "Calisma_Durumu": 1 },
        { "PersonelID": 3, "Adi": "Mehmet", "Soyadi": "Demir", "Tc_No": "33333333333", "Gmail": "mehmet.demir@galeri.com", "Telefon": "0544 333 0003", "Adres": "Nilüfer / Bursa", "Gorev": "Galeri Uzmanı", "Calisma_Durumu": 1 },
        { "PersonelID": 4, "Adi": "Zeynep", "Soyadi": "Şahin", "Tc_No": "44444444444", "Gmail": "zeynep.sahin@galeri.com", "Telefon": "0555 222 0004", "Adres": "Konak / İzmir", "Gorev": "Satış Temsilcisi", "Calisma_Durumu": 1 }
      ],
      "Markalar": [
        { "MarkaID": 1, "Marka_Adi": "BMW", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "MarkaID": 2, "Marka_Adi": "Mercedes-Benz", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "MarkaID": 3, "Marka_Adi": "Audi", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "MarkaID": 4, "Marka_Adi": "Porsche", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "MarkaID": 5, "Marka_Adi": "Volkswagen", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 },
        { "MarkaID": 6, "Marka_Adi": "Volvo", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 }
      ],
      "Modeller": [
        { "ModelID": 1, "Model_Adi": "M4 Competition Coupe", "Islem_Tarihi": "2026-01-10", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "ModelID": 2, "Model_Adi": "320i Sedan M Sport", "Islem_Tarihi": "2026-01-11", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "ModelID": 3, "Model_Adi": "530i xDrive Executive", "Islem_Tarihi": "2026-01-12", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "ModelID": 4, "Model_Adi": "C200 d AMG Edition", "Islem_Tarihi": "2026-01-12", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "ModelID": 5, "Model_Adi": "E300 d 4MATIC AMG", "Islem_Tarihi": "2026-01-14", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "ModelID": 6, "Model_Adi": "G63 AMG V8 Biturbo", "Islem_Tarihi": "2026-01-14", "Ekleyen_PersonelID": 1, "Aktif_Mi": 1 },
        { "ModelID": 7, "Model_Adi": "A6 Sedan 45 TFSI Quattro", "Islem_Tarihi": "2026-01-15", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "ModelID": 8, "Model_Adi": "RS6 Avant 4.0 TFSI V8", "Islem_Tarihi": "2026-01-16", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "ModelID": 9, "Model_Adi": "Q8 50 TDI Quattro S-Line", "Islem_Tarihi": "2026-01-17", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "ModelID": 10, "Model_Adi": "Taycan Turbo S EV", "Islem_Tarihi": "2026-01-18", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "ModelID": 11, "Model_Adi": "911 Carrera S Coupe", "Islem_Tarihi": "2026-01-19", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "ModelID": 12, "Model_Adi": "Panamera 4S E-Hybrid", "Islem_Tarihi": "2026-01-19", "Ekleyen_PersonelID": 2, "Aktif_Mi": 1 },
        { "ModelID": 13, "Model_Adi": "Golf 1.5 eTSI R-Line", "Islem_Tarihi": "2026-01-20", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 },
        { "ModelID": 14, "Model_Adi": "Tiguan 2.0 TDI Elegance", "Islem_Tarihi": "2026-01-21", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 },
        { "ModelID": 15, "Model_Adi": "Passat Variant 2.0 TDI R-Line", "Islem_Tarihi": "2026-01-21", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 },
        { "ModelID": 16, "Model_Adi": "XC90 B5 AWD Ultimate", "Islem_Tarihi": "2026-01-22", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 },
        { "ModelID": 17, "Model_Adi": "XC60 Recharge T8 Plug-in", "Islem_Tarihi": "2026-01-23", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 },
        { "ModelID": 18, "Model_Adi": "S90 B5 AWD Inscription", "Islem_Tarihi": "2026-01-23", "Ekleyen_PersonelID": 3, "Aktif_Mi": 1 }
      ],
      "Paketler": [
        { "PaketID": 1, "Paket_Adi": "M Performance Package", "Islem_Tarih": "2026-01-05", "Ekleyen_PersonelID": 1, "Aktif_MI": 1 },
        { "PaketID": 2, "Paket_Adi": "AMG Line Night Edition", "Islem_Tarih": "2026-01-05", "Ekleyen_PersonelID": 1, "Aktif_MI": 1 },
        { "PaketID": 3, "Paket_Adi": "S-Line Black Styling", "Islem_Tarih": "2026-01-05", "Ekleyen_PersonelID": 2, "Aktif_MI": 1 },
        { "PaketID": 4, "Paket_Adi": "Performance Carbon Sport", "Islem_Tarih": "2026-01-05", "Ekleyen_PersonelID": 2, "Aktif_MI": 1 },
        { "PaketID": 5, "Paket_Adi": "R-Line Executive Edition", "Islem_Tarih": "2026-01-05", "Ekleyen_PersonelID": 3, "Aktif_MI": 1 },
        { "PaketID": 6, "Paket_Adi": "Inscription Ultimate Luxury", "Islem_Tarih": "2026-01-05", "Ekleyen_PersonelID": 3, "Aktif_MI": 1 }
      ],
      "Sansimanlar": [
        { "SansimanID": 1, "SansimanTuru": "Otomatik (8 İleri Steptronic)", "Aktif_Mi": 1 },
        { "SansimanID": 2, "SansimanTuru": "Otomatik (9G-TRONIC)", "Aktif_Mi": 1 },
        { "SansimanID": 3, "SansimanTuru": "Otomatik (7 İleri S tronic DSG)", "Aktif_Mi": 1 },
        { "SansimanID": 4, "SansimanTuru": "Elektrikli (2 Vitesli Otomatik)", "Aktif_Mi": 1 },
        { "SansimanID": 5, "SansimanTuru": "Otomatik (8 İleri Geartronic)", "Aktif_Mi": 1 },
        { "SansimanID": 6, "SansimanTuru": "Otomatik (8 İleri PDK Çift Kavrama)", "Aktif_Mi": 1 }
      ],
      "Yakit_Turu": [
        { "YakitID": 1, "Yakit_turu": "Benzin", "Aktif_MI": 1 },
        { "YakitID": 2, "Yakit_turu": "Dizel", "Aktif_MI": 1 },
        { "YakitID": 3, "Yakit_turu": "Elektrik (%100 EV)", "Aktif_MI": 1 },
        { "YakitID": 4, "Yakit_turu": "Hibrit (Mild-Hybrid)", "Aktif_MI": 1 },
        { "YakitID": 5, "Yakit_turu": "Plug-in Hybrid (PHEV)", "Aktif_MI": 1 }
      ],
      "Motor_Turu": [
        { "MotorID": 1, "Motor_Adi": "3.0 M TwinPower Turbo 510 HP", "Aktif_Mi": 1 },
        { "MotorID": 2, "Motor_Adi": "2.0 Turbo Dizel 200 HP + EQ", "Aktif_Mi": 1 },
        { "MotorID": 3, "Motor_Adi": "2.0 TFSI Mild-Hybrid 265 HP", "Aktif_Mi": 1 },
        { "MotorID": 4, "Motor_Adi": "Çift Elektrik Motoru 761 HP", "Aktif_Mi": 1 },
        { "MotorID": 5, "Motor_Adi": "4.0 V8 BiTurbo 585 HP", "Aktif_Mi": 1 },
        { "MotorID": 6, "Motor_Adi": "4.0 V8 Twin-Turbo 600 HP", "Aktif_Mi": 1 },
        { "MotorID": 7, "Motor_Adi": "3.0 Flat-6 Twin-Turbo 450 HP", "Aktif_Mi": 1 },
        { "MotorID": 8, "Motor_Adi": "2.0 Turbo Benzin Mild-Hybrid 250 HP", "Aktif_Mi": 1 },
        { "MotorID": 9, "Motor_Adi": "2.0 Turbo Plug-in Hybrid 455 HP", "Aktif_Mi": 1 }
      ],
      "Musteriler": [
        { "MusteriID": 1, "Musteri_Tc_NO": "98765432101", "Musteri_Adi": "Caner", "Musteri_Soyadi": "Öztürk", "Musteri_tel_No": "0532 555 1234", "Musteri_Adresi": "Levent / İstanbul", "Musteri_Gmail": "caner.ozturk@gmail.com", "Musteri_Kayit_Tarihi": "2026-02-01", "Ekleyen_PersonelID": 1, "Kayit_Durumu": 1 },
        { "MusteriID": 2, "Musteri_Tc_NO": "87654321098", "Musteri_Adi": "Elif", "Musteri_Soyadi": "Yıldız", "Musteri_tel_No": "0544 444 5678", "Musteri_Adresi": "Çankaya / Ankara", "Musteri_Gmail": "elif.yildiz@gmail.com", "Musteri_Kayit_Tarihi": "2026-02-05", "Ekleyen_PersonelID": 2, "Kayit_Durumu": 1 },
        { "MusteriID": 3, "Musteri_Tc_NO": "76543210987", "Musteri_Adi": "Burak", "Musteri_Soyadi": "Aydın", "Musteri_tel_No": "0555 333 9988", "Musteri_Adresi": "Karşıyaka / İzmir", "Musteri_Gmail": "burak.aydin@gmail.com", "Musteri_Kayit_Tarihi": "2026-02-10", "Ekleyen_PersonelID": 3, "Kayit_Durumu": 1 },
        { "MusteriID": 4, "Musteri_Tc_NO": "65432109876", "Musteri_Adi": "Selin", "Musteri_Soyadi": "Korkmaz", "Musteri_tel_No": "0533 111 2233", "Musteri_Adresi": "Nilüfer / Bursa", "Musteri_Gmail": "selin.korkmaz@gmail.com", "Musteri_Kayit_Tarihi": "2026-02-12", "Ekleyen_PersonelID": 1, "Kayit_Durumu": 1 }
      ],
      "Araclar": [
        { "Sasi_No": "WBA33AY080FK12948", "MarkaID": 1, "ModelID": 1, "PaketID": 1, "SansimanID": 1, "YakitID": 1, "MotorID": 1, "Renk": "Isle of Man Green", "Fiyat": 5450000.00, "Ekleyen_PersonelID": 1, "Satis_Durumu": 0 },
        { "Sasi_No": "WBA320I080FK99281", "MarkaID": 1, "ModelID": 2, "PaketID": 1, "SansimanID": 1, "YakitID": 1, "MotorID": 8, "Renk": "Alpine Beyaz", "Fiyat": 2850000.00, "Ekleyen_PersonelID": 1, "Satis_Durumu": 0 },
        { "Sasi_No": "WBA530I080FK44812", "MarkaID": 1, "ModelID": 3, "PaketID": 1, "SansimanID": 1, "YakitID": 4, "MotorID": 8, "Renk": "Carbon Siyah", "Fiyat": 4250000.00, "Ekleyen_PersonelID": 1, "Satis_Durumu": 0 },
        { "Sasi_No": "WDD2050041F983421", "MarkaID": 2, "ModelID": 4, "PaketID": 2, "SansimanID": 2, "YakitID": 2, "MotorID": 2, "Renk": "Obsidian Siyah", "Fiyat": 3250000.00, "Ekleyen_PersonelID": 1, "Satis_Durumu": 1 },
        { "Sasi_No": "WDD2130041F882194", "MarkaID": 2, "ModelID": 5, "PaketID": 2, "SansimanID": 2, "YakitID": 2, "MotorID": 2, "Renk": "Selenit Gri", "Fiyat": 4890000.00, "Ekleyen_PersonelID": 2, "Satis_Durumu": 0 },
        { "Sasi_No": "WDD4630041F771928", "MarkaID": 2, "ModelID": 6, "PaketID": 2, "SansimanID": 2, "YakitID": 1, "MotorID": 5, "Renk": "Mat Siyah (Night Package)", "Fiyat": 14500000.00, "Ekleyen_PersonelID": 1, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "WAUZZZF28MN049281", "MarkaID": 3, "ModelID": 7, "PaketID": 3, "SansimanID": 3, "YakitID": 4, "MotorID": 3, "Renk": "Daytona Gri", "Fiyat": 4100000.00, "Ekleyen_PersonelID": 2, "Satis_Durumu": 0 },
        { "Sasi_No": "WAUZZZRS6MN992817", "MarkaID": 3, "ModelID": 8, "PaketID": 3, "SansimanID": 3, "YakitID": 1, "MotorID": 6, "Renk": "Nardo Gri", "Fiyat": 9800000.00, "Ekleyen_PersonelID": 2, "Satis_Durumu": 0 },
        { "Sasi_No": "WAUZZZQ88MN119284", "MarkaID": 3, "ModelID": 9, "PaketID": 3, "SansimanID": 3, "YakitID": 2, "MotorID": 3, "Renk": "Mythos Siyah", "Fiyat": 6350000.00, "Ekleyen_PersonelID": 2, "Satis_Durumu": 0 },
        { "Sasi_No": "WP0ZZZY1ZMSA94821", "MarkaID": 4, "ModelID": 10, "PaketID": 4, "SansimanID": 4, "YakitID": 3, "MotorID": 4, "Renk": "Frozen Mavi", "Fiyat": 8900000.00, "Ekleyen_PersonelID": 2, "Satis_Durumu": 0 },
        { "Sasi_No": "WP0ZZZ991ZMS88192", "MarkaID": 4, "ModelID": 11, "PaketID": 4, "SansimanID": 6, "YakitID": 1, "MotorID": 7, "Renk": "GT Gümüş Metalik", "Fiyat": 11200000.00, "Ekleyen_PersonelID": 2, "Satis_Durumu": 0 },
        { "Sasi_No": "WP0ZZZPANZMS33918", "MarkaID": 4, "ModelID": 12, "PaketID": 4, "SansimanID": 6, "YakitID": 5, "MotorID": 9, "Renk": "Kreatif Volkanik Kırmızı", "Fiyat": 8450000.00, "Ekleyen_PersonelID": 1, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1541348263662-e082662d82da?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "WVWZZZCDZMW119283", "MarkaID": 5, "ModelID": 13, "PaketID": 5, "SansimanID": 3, "YakitID": 4, "MotorID": 8, "Renk": "Lapiz Mavi", "Fiyat": 1980000.00, "Ekleyen_PersonelID": 3, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "WVWZZZ5NZMW448192", "MarkaID": 5, "ModelID": 14, "PaketID": 5, "SansimanID": 3, "YakitID": 2, "MotorID": 2, "Renk": "Derin Siyah", "Fiyat": 2650000.00, "Ekleyen_PersonelID": 3, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "WVWZZZ3CZMW998124", "MarkaID": 5, "ModelID": 15, "PaketID": 5, "SansimanID": 3, "YakitID": 2, "MotorID": 2, "Renk": "Pirit Gümüş", "Fiyat": 2950000.00, "Ekleyen_PersonelID": 3, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "YV1CZ1509M1092837", "MarkaID": 6, "ModelID": 16, "PaketID": 6, "SansimanID": 5, "YakitID": 4, "MotorID": 8, "Renk": "Kristal Beyaz", "Fiyat": 5950000.00, "Ekleyen_PersonelID": 3, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "YV1UZ1509M1882914", "MarkaID": 6, "ModelID": 17, "PaketID": 6, "SansimanID": 5, "YakitID": 5, "MotorID": 9, "Renk": "Deniz Mavisi Metalik", "Fiyat": 4350000.00, "Ekleyen_PersonelID": 3, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1000&auto=format&fit=crop&q=80" },
        { "Sasi_No": "YV1LZ1509M1449182", "MarkaID": 6, "ModelID": 18, "PaketID": 6, "SansimanID": 5, "YakitID": 4, "MotorID": 8, "Renk": "Onyx Siyah", "Fiyat": 3850000.00, "Ekleyen_PersonelID": 3, "Satis_Durumu": 0, "Resim_URL": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&auto=format&fit=crop&q=80" }
      ],
      "Satis_Tablosu": [
        { "Satis_NO": 1, "Sasi_No": "WDD2050041F983421", "Satan_PersonelID": 1, "MusteriID": 1, "Satis_Tarihi": "2026-02-15", "Satis_Fiyati": 3200000.00 }
      ]
    }
    """;
    return JsonNode.Parse(jsonString)!;
}

// -------------------------------------------------------------
// 1) EMAIL ENTEGRASYONU: /api/send-email (SendGrid HTTP API)
// -------------------------------------------------------------
app.MapPost("/api/send-email", async (HttpContext context, IConfiguration config) =>
{
    try
    {
        using var reader = new StreamReader(context.Request.Body);
        string bodyText = await reader.ReadToEndAsync();
        var doc = JsonNode.Parse(bodyText);

        string toEmail = doc?["to"]?.ToString() ?? doc?["toEmail"]?.ToString() ?? "";
        string personelAdi = doc?["personelName"]?.ToString() ?? doc?["name"]?.ToString() ?? "Personel";
        string verificationCode = doc?["code"]?.ToString() ?? doc?["verificationCode"]?.ToString() ?? "";

        if (string.IsNullOrWhiteSpace(toEmail))
        {
            return Results.BadRequest(new { success = false, error = "Alıcı e-posta adresi (toEmail) gereklidir." });
        }

        // SendGrid API Key: önce config, sonra Environment Variable
        string sendGridApiKey = config["SendGrid:ApiKey"] ?? Environment.GetEnvironmentVariable("SENDGRID_API_KEY") ?? "";
        string senderEmail = config["SendGrid:SenderEmail"]
            ?? Environment.GetEnvironmentVariable("SMTP_SENDER_EMAIL")
            ?? "yalcinbaris548@gmail.com";

        if (string.IsNullOrWhiteSpace(sendGridApiKey))
        {
            return Results.Json(new
            {
                success = false,
                error = "SendGrid API anahtarı bulunamadı. Render > Environment > SENDGRID_API_KEY değişkenini ekleyin."
            }, statusCode: 400);
        }

        // SendGrid v3 Mail Send API
        string htmlBody = $@"
            <div style='font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8; border-radius: 8px;'>
                <h2 style='color: #1e293b;'>ArabaSatisDB Güvenli Giriş Portalı</h2>
                <p>Sayın <strong>{personelAdi}</strong>,</p>
                <p>Sisteme giriş yapabilmek için kullanacağınız 6 haneli güvenlik kodunuz:</p>
                <div style='font-size: 32px; font-weight: bold; color: #2563eb; letter-spacing: 8px; margin: 20px 0; padding: 16px; background: #e8f0fe; border-radius: 8px; text-align: center;'>
                    {verificationCode}
                </div>
                <p style='color: #64748b; font-size: 12px;'>Bu kodu kimseyle paylaşmayınız. Güvenliğiniz bizim için önemlidir.</p>
            </div>";

        var payload = JsonNode.Parse($@"{{
            ""personalizations"": [{{""to"": [{{""email"": ""{toEmail}""}}]}}],
            ""from"": {{""email"": ""{senderEmail}"", ""name"": ""ArabaSatisDB Otomotiv Portalı""}},
            ""subject"": ""🔐 ArabaSatisDB - 2FA Giriş Doğrulama Kodunuz"",
            ""content"": [{{""type"": ""text/html"", ""value"": {JsonSerializer.Serialize(htmlBody)}}}]
        }}")!;

        using var http = new HttpClient();
        http.DefaultRequestHeaders.Add("Authorization", $"Bearer {sendGridApiKey}");
        var response = await http.PostAsync(
            "https://api.sendgrid.com/v3/mail/send",
            new StringContent(payload.ToJsonString(), System.Text.Encoding.UTF8, "application/json")
        );

        if (response.IsSuccessStatusCode)
        {
            return Results.Ok(new { success = true, message = $"2FA güvenlik kodu {toEmail} adresine başarıyla iletildi." });
        }
        else
        {
            string errBody = await response.Content.ReadAsStringAsync();
            return Results.Json(new { success = false, error = $"SendGrid hatası ({(int)response.StatusCode}): {errBody}" }, statusCode: 500);
        }
    }
    catch (Exception ex)
    {
        return Results.Json(new { success = false, error = ex.Message }, statusCode: 500);
    }

});

// -------------------------------------------------------------
// 2) DATABASE GET ENDPOINT: /api/db
// -------------------------------------------------------------
app.MapGet("/api/db", () =>
{
    var db = LoadDatabase();
    return Results.Ok(db);
});

// -------------------------------------------------------------
// 3) CRUD GET ENDPOINT: /api/crud/{table}
// -------------------------------------------------------------
app.MapGet("/api/crud/{table}", (string table) =>
{
    var db = LoadDatabase();
    var arr = db?[table]?.AsArray();
    if (arr == null) return Results.NotFound(new { error = $"'{table}' tablosu bulunamadı." });
    return Results.Ok(arr);
});

// -------------------------------------------------------------
// 4) CRUD POST ENDPOINT: /api/crud/{table} (Yeni Kayıt)
// -------------------------------------------------------------
app.MapPost("/api/crud/{table}", async (string table, HttpContext context) =>
{
    var db = LoadDatabase();
    var arr = db?[table]?.AsArray();
    if (arr == null) return Results.NotFound(new { error = $"'{table}' tablosu bulunamadı." });

    using var reader = new StreamReader(context.Request.Body);
    string json = await reader.ReadToEndAsync();
    var newRecord = JsonNode.Parse(json)?.AsObject();
    if (newRecord == null) return Results.BadRequest(new { error = "Geçersiz JSON verisi." });

    // Auto-increment primary key if identity ID field exists and not set
    if (arr.Count > 0 && arr[0] is JsonObject firstObj)
    {
        string primaryKeyName = firstObj.GetEnumerator().Current.Key;
        if (primaryKeyName.EndsWith("ID", StringComparison.OrdinalIgnoreCase) && !newRecord.ContainsKey(primaryKeyName))
        {
            int maxId = 0;
            foreach (var item in arr)
            {
                if (item?[primaryKeyName] != null && int.TryParse(item[primaryKeyName]!.ToString(), out int existingId))
                {
                    if (existingId > maxId) maxId = existingId;
                }
            }
            newRecord[primaryKeyName] = maxId + 1;
        }
    }

    arr.Add(newRecord);
    if (db != null) SaveDatabase(db);

    return Results.Ok(newRecord);
});

// -------------------------------------------------------------
// 5) CRUD PUT ENDPOINT: /api/crud/{table}/{pk} (Kayıt Güncelleme)
// -------------------------------------------------------------
app.MapPut("/api/crud/{table}/{pk}", async (string table, string pk, HttpContext context) =>
{
    var db = LoadDatabase();
    var arr = db?[table]?.AsArray();
    if (arr == null) return Results.NotFound(new { error = $"'{table}' tablosu bulunamadı." });

    using var reader = new StreamReader(context.Request.Body);
    string json = await reader.ReadToEndAsync();
    var updateObj = JsonNode.Parse(json)?.AsObject();
    if (updateObj == null) return Results.BadRequest(new { error = "Geçersiz JSON verisi." });

    if (arr.Count == 0) return Results.NotFound(new { error = "Tabloda kayıt yok." });

    string pkKey = (arr[0] as JsonObject)!.GetEnumerator().Current.Key;

    JsonObject? targetRecord = null;
    foreach (var item in arr)
    {
        if (item is JsonObject obj && obj.ContainsKey(pkKey) && obj[pkKey]?.ToString() == pk)
        {
            targetRecord = obj;
            break;
        }
    }

    if (targetRecord == null) return Results.NotFound(new { error = $"Primary key '{pk}' olan kayıt bulunamadı." });

    foreach (var prop in updateObj)
    {
        targetRecord[prop.Key] = prop.Value?.DeepClone();
    }

    if (db != null) SaveDatabase(db);
    return Results.Ok(targetRecord);
});

// -------------------------------------------------------------
// 6) CRUD DELETE ENDPOINT: /api/crud/{table}/{pk} (Kayıt Silme)
// -------------------------------------------------------------
app.MapDelete("/api/crud/{table}/{pk}", (string table, string pk) =>
{
    var db = LoadDatabase();
    var arr = db?[table]?.AsArray();
    if (arr == null) return Results.NotFound(new { error = $"'{table}' tablosu bulunamadı." });

    if (arr.Count == 0) return Results.NotFound(new { error = "Tabloda kayıt yok." });

    string pkKey = (arr[0] as JsonObject)!.GetEnumerator().Current.Key;

    int indexToRemove = -1;
    for (int i = 0; i < arr.Count; i++)
    {
        if (arr[i] is JsonObject obj && obj.ContainsKey(pkKey) && obj[pkKey]?.ToString() == pk)
        {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove == -1) return Results.NotFound(new { error = $"Primary key '{pk}' olan kayıt bulunamadı." });

    arr.RemoveAt(indexToRemove);
    if (db != null) SaveDatabase(db);

    return Results.Ok(new { success = true, message = "Kayıt başarıyla silindi." });
});

// -------------------------------------------------------------
// 7) SALES TRANSACTION ENDPOINT: /api/sales
// -------------------------------------------------------------
app.MapPost("/api/sales", async (HttpContext context) =>
{
    var db = LoadDatabase();
    var araclar = db?["Araclar"]?.AsArray();
    var satislar = db?["Satis_Tablosu"]?.AsArray();

    if (araclar == null || satislar == null) return Results.BadRequest(new { error = "Veritabanı tabloları yüklenemedi." });

    using var reader = new StreamReader(context.Request.Body);
    string json = await reader.ReadToEndAsync();
    var saleReq = JsonNode.Parse(json)?.AsObject();
    if (saleReq == null) return Results.BadRequest(new { error = "Geçersiz satış verisi." });

    string sasiNo = saleReq["Sasi_No"]?.ToString() ?? "";
    int musteriId = saleReq["MusteriID"]?.GetValue<int>() ?? 0;
    int personelId = saleReq["Satan_PersonelID"]?.GetValue<int>() ?? 0;
    decimal satisFiyati = saleReq["Satis_Fiyati"]?.GetValue<decimal>() ?? 0;
    string satisTarihi = saleReq["Satis_Tarihi"]?.ToString() ?? DateTime.Now.ToString("yyyy-MM-dd");

    // Update car Satis_Durumu = 1
    JsonObject? car = null;
    foreach (var item in araclar)
    {
        if (item is JsonObject obj && obj["Sasi_No"]?.ToString() == sasiNo)
        {
            car = obj;
            break;
        }
    }

    if (car == null) return Results.NotFound(new { error = $"'{sasiNo}' şasi numaralı araç bulunamadı." });

    car["Satis_Durumu"] = 1;

    // Generate new Satis_NO
    int maxSaleId = 0;
    foreach (var s in satislar)
    {
        if (s?["Satis_NO"] != null && int.TryParse(s["Satis_NO"]!.ToString(), out int sid))
        {
            if (sid > maxSaleId) maxSaleId = sid;
        }
    }

    var newSale = new JsonObject
    {
        ["Satis_NO"] = maxSaleId + 1,
        ["Sasi_No"] = sasiNo,
        ["Satan_PersonelID"] = personelId,
        ["MusteriID"] = musteriId,
        ["Satis_Tarihi"] = satisTarihi,
        ["Satis_Fiyati"] = satisFiyati
    };

    satislar.Add(newSale);
    if (db != null) SaveDatabase(db);

    return Results.Ok(newSale);
});

// -------------------------------------------------------------
// 8) PERSONNEL STATUS TOGGLE ENDPOINT: /api/personnel/{id}/toggle-status
// -------------------------------------------------------------
app.MapPost("/api/personnel/{id}/toggle-status", (int id) =>
{
    var db = LoadDatabase();
    var personeller = db?["Personeller"]?.AsArray();
    if (personeller == null) return Results.NotFound(new { error = "Personeller tablosu bulunamadı." });

    JsonObject? targetPerson = null;
    foreach (var item in personeller)
    {
        if (item is JsonObject obj && obj["PersonelID"]?.GetValue<int>() == id)
        {
            targetPerson = obj;
            break;
        }
    }

    if (targetPerson == null) return Results.NotFound(new { error = $"Personel #{id} bulunamadı." });

    int currentStatus = targetPerson["Calisma_Durumu"]?.GetValue<int>() ?? 1;
    int newStatus = currentStatus == 1 ? 0 : 1;
    targetPerson["Calisma_Durumu"] = newStatus;

    if (db != null) SaveDatabase(db);
    return Results.Ok(targetPerson);
});

Console.WriteLine("=======================================================");
Console.WriteLine("🚀 ArabaSatisDB C# ASP.NET Core Sunucusu Başlatılıyor...");
Console.WriteLine("=======================================================");

app.Run();
