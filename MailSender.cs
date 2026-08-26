using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ArabaSatisDB
{
    /// <summary>
    /// Gmail SMTP sunucusu üzerinden e-posta gönderimi sağlayan C# MailSender sınıfı.
    /// ArabaSatisDB sistemi ile tam uyumlu çalışır.
    /// </summary>
    public class MailSender
    {
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly string _senderEmail;
        private readonly string _appPassword;

        /// <summary>
        /// MailSender Kurucu Metodu
        /// </summary>
        /// <param name="senderEmail">Gönderici Gmail Adresi</param>
        /// <param name="appPassword">Google Hesabı -> Güvenlik -> 16 Haneli Uygulama Şifresi</param>
        /// <param name="smtpHost">SMTP Sunucu Adresi (Varsayılan: smtp.gmail.com)</param>
        /// <param name="smtpPort">SMTP Port Numarası (Varsayılan: 587)</param>
        public MailSender(string senderEmail, string appPassword, string smtpHost = "smtp.gmail.com", int smtpPort = 587)
        {
            _senderEmail = senderEmail;
            _appPassword = appPassword;
            _smtpHost = smtpHost;
            _smtpPort = smtpPort;
        }

        /// <summary>
        /// Genel Bildirim E-Postası Gönderir (Senkron)
        /// </summary>
        public bool BildirimMailiGonder(string toEmail, string subject, string htmlBody)
        {
            try
            {
                using (SmtpClient smtpClient = new SmtpClient(_smtpHost, _smtpPort))
                {
                    smtpClient.Timeout = 6000; // 6 saniye zaman aşımı (Render kilitlenmesini önler)
                    smtpClient.EnableSsl = true;
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.UseDefaultCredentials = false;
                    smtpClient.Credentials = new NetworkCredential(_senderEmail, _appPassword);

                    using (MailMessage mail = new MailMessage())
                    {
                        mail.From = new MailAddress(_senderEmail, "ArabaSatisDB Otomotiv Portalı");
                        mail.To.Add(toEmail);
                        mail.Subject = subject;
                        mail.Body = htmlBody;
                        mail.IsBodyHtml = true;

                        smtpClient.Send(mail);
                        Console.WriteLine($"[BAŞARILI] Mail {toEmail} adresine iletildi.");
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[HATA] Mail gönderilemedi: {ex.Message}");
                return false;
            }
        }

        /// <summary>
        /// ArabaSatisDB Sistem Girişi İçin 2FA Güvenlik Kodu Gönderir (Asenkron)
        /// </summary>
        public async Task<bool> GüvenlikKoduGonderAsync(string toEmail, string personelAdi, string verificationCode)
        {
            string subject = "🔐 ArabaSatisDB - 2FA Giriş Doğrulama Kodunuz";
            string body = $@"
                <div style='font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8; border-radius: 8px;'>
                    <h2 style='color: #1e293b;'>ArabaSatisDB Güvenli Giriş Portal</h2>
                    <p>Sayın <strong>{personelAdi}</strong>,</p>
                    <p>Sisteme giriş yapabilmek için kullanacağınız 6 haneli tek kullanımlık güvenlik kodunuz:</p>
                    <div style='font-size: 28px; font-weight: bold; color: #2563eb; letter-spacing: 5px; margin: 15px 0;'>
                        {verificationCode}
                    </div>
                    <p style='color: #64748b; font-size: 12px;'>Bu kodu kimseyle paylaşmayınız. Güvenliğiniz bizim için önemlidir.</p>
                </div>";

            return await Task.Run(() => BildirimMailiGonder(toEmail, subject, body));
        }
    }
}
