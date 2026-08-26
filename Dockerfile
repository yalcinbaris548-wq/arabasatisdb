# ── Aşama 1: Build ──────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:10.0-preview AS build
WORKDIR /src

# Proje dosyasını kopyala ve bağımlılıkları yükle
COPY ArabaSatisDB.csproj ./
RUN dotnet restore

# Kaynak kodun geri kalanını kopyala ve yayınla
COPY . .
RUN dotnet publish -c Release -o /app/publish --no-restore

# ── Aşama 2: Çalışma ortamı ─────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:10.0-preview AS final
WORKDIR /app

# Yayınlanan dosyaları kopyala
COPY --from=build /app/publish .

# Statik web dosyalarını uygulama dizinine kopyala
COPY index.html ./
COPY styles.css ./
COPY app.js ./
COPY database.json ./

# Render.com PORT env değişkenini bağla (Program.cs zaten okuyor)
ENV ASPNETCORE_URLS=http://+:${PORT:-10000}
EXPOSE 10000

ENTRYPOINT ["dotnet", "ArabaSatisDB.dll"]
