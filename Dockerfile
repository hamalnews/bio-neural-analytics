# استخدام بيئة بايثون مستقرة واحترافية
FROM python:3.9-slim

# ضبط إعدادات النظام لتجنب كشف الهوية الرقمية
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# تثبيت الأدوات اللازمة لبناء "القلعة"
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    libpci3 \
    && rm -rf /var/lib/apt/lists/*

# تفعيل "التمويه المكتبي" - تحميل المتطلبات أولاً
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# نقل كامل الهيكل (src, ui, models, data, scripts) إلى الحاوية
COPY . .

# منح صلاحيات التنفيذ لسكربتات الأتمتة والمحرك المخفي
RUN chmod +x /app/scripts/utils/auto_setup.sh && \
    mkdir -p /app/src/core

# فتح المنفذ القياسي لتطبيقات الويب الذكية
EXPOSE 7860

# أمر التشغيل النهائي الذي يطلق بوابة app.py
CMD ["streamlit", "run", "app.py", "--server.port=7860", "--server.address=0.0.0.0"]

