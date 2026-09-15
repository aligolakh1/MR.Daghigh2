/**
 * مستر دقیق (MR. Daghigh) - Logic & Interactivity
 * Vanilla JavaScript implementation for RTL Persian Industrial Commerce
 */

// Global state and configurations
const MR_DAGHIGH_CONFIG = {
  telegramUsername: 'mrdaghigh_sales',
  phoneDisplay: '۰۲۱-۸۸۸۸۴۳۲۱',
  phoneRaw: '02188884321',
  supportEmail: 'sales@mrdaghigh.com',
  storeAddress: 'تهران، لاله زار جنوبی، بن بست اتحادیه (روبروی مسجد)، پاساژ اتحادیه، همکف، پلاک ۵'
};

// Catalog dataset for search and filters
const PRODUCTS_DATA = [
  {
    id: 'stm32f407',
    name: 'STM32F407VGT6',
    persianTitle: 'میکروکنترلر ۳۲ بیتی پیشرفته STM32F407VGT6 آرم کورتکس M4',
    category: 'microcontrollers',
    categoryFa: 'میکروکنترلر و IC',
    desc: 'میکروکنترلر ۳۲ بیتی با هسته ARM Cortex-M4، فرکانس ۱۶۸ مگاهرتز، فلش ۱ مگابایت',
    stock: '۴۲ عدد',
    rating: '۴.۹',
    tag: 'پارت‌نامبر اورجینال',
    url: 'product-detail.html',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoSCFh8rWvYY1zWIZ2Z62bqvFXT_wLMi0L3OB_vA4lsvqZKrFdMj788r5A0utHRNnv2MAF7O7T1SdxOWXcvMfdlN_e8phZU53o4ER7htzdJPV-MNbwERjqMonNoERreh92rDGUWVrA77afUQ-FueylgWWUpRi32gCgnI-oWlzZ9U0UN09dPZlZWVf_GMHry3Xaa1YkpDUnEo6CriORdqzI46xqw5Io0TULlGNN0UbMIRTU9oboaMDjbw'
  },
  {
    id: 'ut61e',
    name: 'مولتی‌متر دیجیتال UT61E+',
    persianTitle: 'مولتی‌متر دیجیتال صنعتی ۲۲۰۰۰ کانت UT61E+ یونیتی',
    category: 'measurement',
    categoryFa: 'تجهیزات تست',
    desc: 'مولتی‌متر True RMS با رزولوشن ۲۲,۰۰۰ شمارش، اتصال USB به PC و تست دیود سریع',
    stock: '۷ دستگاه',
    rating: '۴.۹',
    tag: 'گارانتی کالیبراسیون',
    url: 'product-detail.html?id=ut61e',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGukbdpCg9K0hiJezZfEe6tXzoNmTETVtzF2x0Pwi3Ac2dj6R-dI5B4bGgHRf198ootwZpQ58t4UHzOl7EDOc7Lu99A6H_SkJj4eNXDmaL9kJ8ta1NAX290OFLSj7xSAK9iKpWoUOPXzRvkVSetXaMxRVjtgsI8t3qp8YRnaOIHOIQU5ksrgqQT-AZm2EFjth_Ml4ayGgsRf6S8fpCvONDky6myBp0HZVvbWNrPBHj_DnM1P5G95ShXQ'
  },
  {
    id: 'irfz44n',
    name: 'ماسفت قدرت IRFZ44N',
    persianTitle: 'ترانزیستور ماسفت قدرت ۵۵ ولت ۴۹ آمپر IRFZ44N',
    category: 'power',
    categoryFa: 'ماژول‌های قدرت',
    desc: 'ماسفت N-Channel با ولتاژ ۵۵ ولت، جریان ۴۹ آمپر و مقاومت درین-سورس ۱۷.۵ میلی‌اهم',
    stock: '۲۸۰ عدد',
    rating: '۴.۸',
    tag: 'اصالت ۱۰۰٪',
    url: 'product-detail.html?id=irfz44n',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkwgK0qScYjHwVto2BxIT87cueOec89kmKcRB35zFE0gPEDluIJ_Xko2RXMKDbfLzk9MUTGDiQid2nf0MTtnv8RiRx0N25GyH9TePRguyX5Zau_UBBXr2LbdNNdzuJDTqlSu5nkCeJVGLfDiCESYCVJap_ASJNUpGCPLkLzcOYy7PxVpk2Id77I2L_KdCUyBcRgaQ29Swgx6p6zPUVdqOqXxtzkjwSGE8VQJglqAWs-zrdLzVvVsUw8Q'
  },
  {
    id: 'esp32',
    name: 'ESP32-WROOM-32D',
    persianTitle: 'ماژول وای‌فای و بلوتوث دو هسته‌ای ESP32-WROOM-32D',
    category: 'microcontrollers',
    categoryFa: 'میکروکنترلر و IC',
    desc: 'ماژول وای‌فای و بلوتوث دو هسته‌ای با آنتن داخلی PCB، حافظه فلش ۴ مگابایت',
    stock: '۹۵ عدد',
    rating: '۴.۹',
    tag: 'پارت‌نامبر اورجینال',
    url: 'product-detail.html?id=esp32',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRGg20fm5XdR9I449P_NnGjOuDbgE6OUzrM5lHeECholvWoDdhJvYnrfpQ391USdmq3rkxHuVRw0Ei7PmgsBnipp9AiHdLUyRZ_r-Z6Zh4bhfBg5ykk6E3X-eD1ImGLRsHb_y2DQSmVHZLyRvTuJuNSCVnkvdafhK1cELtKUiC-1l33kKprhLfiK4E185otAdljfELvOnm_EkvxgUg4jbXLJTDwLS-o_4seSOXANutNmO5NxkzZLHngg'
  },
  {
    id: 'atmega328p',
    name: 'ATmega328P-PU',
    persianTitle: 'میکروکنترلر AVR مدل ATmega328P-PU DIP-28',
    category: 'microcontrollers',
    categoryFa: 'میکروکنترلر و IC',
    desc: 'میکروکنترلر ۸ بیتی AVR، حافظه فلش ۳۲KB، فرکانس ۲۰ مگاهرتز با بوت‌لودر آماده',
    stock: 'موجود',
    rating: '۴.۹',
    tag: 'پارت‌نامبر اورجینال',
    url: 'product-detail.html?id=atmega328p',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVjwN3YU6E4T36Rn0NuD8UnVvkBvzI6Bbf0O1Fbx3pKSbfpV9IWhUJA67-T-sm7UVBCRhNmD1MchgDtqjuBdbJw-T08FTrp5bsmn_7XefWhUOKdDrP74pCbDUkJEJXIVec8XCSp7hGZP5InmLI2_n42Q7DsZfS8IGyv4wWdA2mwkkx_IGqZ3gOtqVdj5UnYA6oZEtYqOgFiOJygqouiP9HyIgEc8OoWdxAtUX7NkC61tO8fqdBlOGoVA'
  },
  {
    id: 'lm2596',
    name: 'ماژول باک رگولاتور LM2596',
    persianTitle: 'ماژول مبدل باک کاهنده ولتاژ LM2596 مولتی‌ترن دقیق',
    category: 'power',
    categoryFa: 'ماژول‌های قدرت',
    desc: 'کاهنده ولتاژ ۳ آمپر با ورودی تا ۴۰ ولت، خروجی ۱.۲۵ الی ۳۵ ولت با مولتی‌ترن تنظیم دقیق',
    stock: 'موجود',
    rating: '۴.۸',
    tag: 'تیراژ و عمده',
    url: 'product-detail.html?id=lm2596',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAttVXWeEb4UpwjdnKzasv-xP5bEUSqXZNXLxHQcgxNCSle0FLn5xEx_QDYejv6wS40KQuZY1HFtfB8Yc_FK9wgj0mU_mntKe5KIfDMaIuUiPcgc6KgSFnZNi-bJwrtW2fvVWifOktnTsca5zbkKy5v5dx9oHQNM5KhDlfXdQ3agqWepvjB92_n6eM-XeXAgKcMybJjgTZqC6XJymljePQwLdqz3jbrB_HypCa5blUnTn5kR1yYaYk21g'
  },
  {
    id: 'ds18b20',
    name: 'سنسور دما DS18B20 ضدآب',
    persianTitle: 'سنسور دمای دیجیتال صنعتی ضدآب پراب استیل DS18B20',
    category: 'sensors',
    categoryFa: 'سنسورهای صنعتی',
    desc: 'سنسور دیجیتال ۱-Wire با غلاف استیل ضدزنگ و کابل ۱ متری سیلیکونی صنعتی (-۵۵ تا +۱۲۵°C)',
    stock: 'موجود',
    rating: '۵.۰',
    tag: 'کالیبره کارخانه‌ای',
    url: 'product-detail.html?id=ds18b20',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkDGOy-W7MFyNpSm-xav-tuHtah3tomZMQ8NxWN5fBnR4dBivpy9EYjFco3X6AARcTX9zGye45Z6iTV5CgNagT90HvSuwkJEV1QKUlwbgnN5QuBAFrRO_KyLWnhSWzpTRgfSTR9Pen8uIYC8kavR0--JCKHOmtmy5tAxtAEDdRKQJEhcxWfrFMiInVAt0T79wGcikm9SOp95usQ9_Ujc1eUiA1Acar3iAZKr_F_ieWua0sFeR5VlTkzA'
  },
  {
    id: 'quick706w',
    name: 'هیتر و هویه QUICK 706W+',
    persianTitle: 'دستگاه هویه و هیتر هوای گرم دیجیتال ۲ کاره QUICK 706W+',
    category: 'soldering',
    categoryFa: 'تجهیزات لحیم‌کاری',
    desc: 'ایستگاه مونتاژ و دمونتاژ هوای گرم و هویه قلمی ۵۰ وات مجزا با قطع‌کن اتوماتیک مغناطیسی',
    stock: 'موجود',
    rating: '۴.۹',
    tag: 'گارانتی ۱۲ ماهه',
    url: 'product-detail.html?id=quick706w',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaKOBeVwh4tbib1GVjhMiNY0ppLuWs6MzQZ1K7r4Vjr50aAXL1rFegiekfkvWlqJ4jc11UO-O-kYzNXYCSLtvuuQD8TMeyro9qnC_OUSYguugbSjbqLU6n2Ilxjj9XHBS3OQkE4KmrvB53XijHxbsZMOnW59iHQhETylCydDBD0TughdX_f26GJibSzXYa6VBlawkgZ9LzaCkIiEgluBkCWZnoLUVQ0ErSL3eUL-EraUY_DTBEp_rUbQ'
  }
];

/**
 * Generates and initiates a Telegram order with Persian formatting
 * @param {string} productName 
 * @param {string|number} quantity 
 * @param {string} notes 
 */
function orderViaTelegram(productName, quantity = '۱', notes = '') {
  const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
  const dateStr = new Date().toLocaleDateString('fa-IR');
  
  let text = `سلام و احترام؛ درخواست استعلام قیمت و سفارش قطعه از فروشگاه «مستر دقیق»:\n\n`;
  text += `🔹 قطعه درخواستی: ${productName}\n`;
  if (quantity) text += `📦 تعداد تقریبی: ${quantity}\n`;
  if (notes) text += `📝 توضیحات فنی: ${notes}\n`;
  text += `⏰ زمان ثبت: ${dateStr} - ساعت ${timeStr}\n\n`;
  text += `لطفاً پیش‌فاکتور رسمی، قیمت نهایی و وضعیت تحویل انبار را ارسال فرمایید. با تشکر.`;

  const encoded = encodeURIComponent(text);
  const telegramUrl = `https://t.me/${MR_DAGHIGH_CONFIG.telegramUsername}?text=${encoded}`;
  
  // Try opening Telegram
  window.open(telegramUrl, '_blank');
}

/**
 * Toast notification for actions
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('mr-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'mr-toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;left:24px;z-index:99999;display:flex;flex-direction:column;gap:8px;pointer-events:none;direction:rtl;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = 'pointer-events:auto;min-width:280px;max-width:380px;background:#213145;color:#f8f9ff;padding:12px 16px;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.15);display:flex;align-items:center;gap:10px;font-family:Vazirmatn,sans-serif;font-size:13px;line-height:1.5;border-right:4px solid #ff6b1a;animation:fadeIn 0.25s ease-out;';
  
  if (type === 'success') {
    toast.style.borderRightColor = '#059669';
  } else if (type === 'error') {
    toast.style.borderRightColor = '#ba1a1a';
  }

  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:18px;color:#ff6b1a;">${type === 'success' ? 'check_circle' : (type === 'error' ? 'error' : 'info')}</span>
    <span style="flex:1;">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Modal for Quick Contact & Telegram Inquiry
 */
function openInquiryModal(productName = '') {
  let modal = document.getElementById('inquiryModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'inquiryModal';
    modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity';
    modal.innerHTML = `
      <div class="bg-surface-container-lowest text-on-surface rounded-xl max-w-lg w-full p-6 shadow-2xl border border-surface-container-high relative flex flex-col gap-4 font-body-md" dir="rtl">
        <div class="flex items-center justify-between border-b border-surface-container pb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary-container text-2xl">support_agent</span>
            <h3 class="font-headline-sm text-lg font-bold text-on-surface">استعلام سریع و تماس با کارشناس</h3>
          </div>
          <button type="button" onclick="closeInquiryModal()" class="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-secondary hover:text-on-surface transition-colors">
            <span class="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <p class="text-sm text-secondary leading-relaxed">
          جهت استعلام موجودی انبار تهران، دریافت پیش‌فاکتور رسمی و قیمت ویژه همکاران صنعتی، می‌توانید از روش‌های زیر با ما در ارتباط باشید:
        </p>

        <div class="flex flex-col gap-3">
          <!-- Item info if specified -->
          <div id="modalItemBox" class="p-3 bg-surface-container-low rounded-lg flex items-center justify-between border border-outline-variant/30 ${productName ? '' : 'hidden'}">
            <span class="text-xs text-secondary">قطعه مورد نظر:</span>
            <span id="modalItemName" class="font-bold text-primary font-label-mono-md text-sm">${productName}</span>
          </div>

          <!-- Telegram Quick Button -->
          <button type="button" id="modalTgBtn" class="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            <span>استعلام و سفارش مستقیم در تلگرام</span>
          </button>

          <!-- Direct Phone Call -->
          <a href="tel:${MR_DAGHIGH_CONFIG.phoneRaw}" class="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm">
            <span class="material-symbols-outlined text-xl">call</span>
            <span>تماس تلفنی مستقیم: ${MR_DAGHIGH_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        <div class="mt-1 pt-3 border-t border-surface-container flex items-center justify-between text-xs text-secondary">
          <span>ساعت پاسخگویی: شنبه تا چهارشنبه ۹ الی ۱۸</span>
          <span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-tertiary"></span> انبار فعال</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Update modal contents
  const itemBox = document.getElementById('modalItemBox');
  const itemNameEl = document.getElementById('modalItemName');
  const tgBtn = document.getElementById('modalTgBtn');

  if (productName) {
    itemBox.classList.remove('hidden');
    itemNameEl.innerText = productName;
  } else {
    itemBox.classList.add('hidden');
  }

  tgBtn.onclick = () => {
    orderViaTelegram(productName || 'استعلام کلی پارت‌نامبرهای صنعتی');
    closeInquiryModal();
  };

  modal.classList.remove('hidden');
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiryModal');
  if (modal) modal.classList.add('hidden');
}

/**
 * Filter functionality for Best-Seller Section
 */
function initBestSellerTabs() {
  const buttons = document.querySelectorAll('[data-bestseller-filter]');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('bg-surface-container-lowest', 'text-on-surface');
      });
      btn.classList.add('bg-primary', 'text-on-primary');
      btn.classList.remove('bg-surface-container-lowest', 'text-on-surface');

      const filter = btn.getAttribute('data-bestseller-filter');
      const cards = document.querySelectorAll('[data-product-category]');
      cards.forEach(card => {
        const cat = card.getAttribute('data-product-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Interactive Header Search Filter
 */
function initHeaderSearch() {
  const searchInputs = document.querySelectorAll('input[placeholder*="جستجو"]');
  searchInputs.forEach(input => {
    let resultContainer = null;
    
    input.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        if (resultContainer) resultContainer.remove();
        resultContainer = null;
        return;
      }

      const matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.persianTitle.includes(q) || 
        p.desc.includes(q) || 
        p.categoryFa.includes(q)
      );

      if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.className = 'absolute top-full right-0 left-0 mt-2 bg-surface-container-lowest rounded-xl shadow-xl border border-surface-container-high z-50 overflow-hidden font-body-md divide-y divide-surface-container';
        input.parentElement.parentElement.style.position = 'relative';
        input.parentElement.parentElement.appendChild(resultContainer);
      }

      if (matches.length === 0) {
        resultContainer.innerHTML = `
          <div class="p-4 text-center text-sm text-secondary">
            موردی برای «${q}» یافت نشد. جهت تأمین قطعه خاص با کارشناسان ما تماس بگیرید.
          </div>
        `;
      } else {
        resultContainer.innerHTML = matches.slice(0, 5).map(m => `
          <a href="${m.url}" class="p-3 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
            <div class="flex items-center gap-3">
              <img src="${m.image}" alt="${m.name}" class="w-10 h-10 object-cover rounded bg-surface-container" />
              <div class="flex flex-col text-right">
                <span class="font-bold text-on-surface group-hover:text-primary transition-colors text-sm font-label-mono-md" dir="ltr">${m.name}</span>
                <span class="text-xs text-secondary line-clamp-1">${m.persianTitle}</span>
              </div>
            </div>
            <span class="text-xs text-primary font-bold">مشاهده مشخصات</span>
          </a>
        `).join('') + `
          <div class="p-2 bg-surface-container-low text-center">
            <a href="products.html" class="text-xs text-primary font-bold hover:underline">مشاهده همه قطعات در کاتالوگ</a>
          </div>
        `;
      }
    });

    // Close on click outside
    document.addEventListener('click', (ev) => {
      if (resultContainer && !input.contains(ev.target) && !resultContainer.contains(ev.target)) {
        resultContainer.remove();
        resultContainer = null;
      }
    });
  });
}

/**
 * Setup wireframes & click delegates
 */
document.addEventListener('DOMContentLoaded', () => {
  initBestSellerTabs();
  initHeaderSearch();

  // Attach Telegram ordering / inquiry to action buttons ONLY (never intercept navigation links)
  document.querySelectorAll('button[data-action="inquiry"], a[data-action="inquiry"]').forEach(el => {
    el.addEventListener('click', (e) => {
      const card = el.closest('[data-product-name]');
      const prodName = card ? card.getAttribute('data-product-name') : '';
      e.preventDefault();
      openInquiryModal(prodName || 'استعلام سریع');
    });
  });

  // Attach auth handlers to all account login buttons
  initAccountAuthListeners();
  updateHeaderAccountUI();
});

/**
 * ====================================================================
 * ACCOUNT MANAGEMENT & AUTHENTICATION ENGINE (Domain-Ready & Isolated)
 * ====================================================================
 */
const ACCOUNTS_STORAGE_KEY = 'mr_daghigh_accounts_v1';
const CURRENT_USER_KEY = 'mr_daghigh_current_user_v1';
const ADMIN_AUTH_KEY = 'mr_daghigh_admin_auth_v1';

const INITIAL_ACCOUNTS = [
  {
    id: 'ACC-1001',
    fullName: 'مدیریت مستر دقیق',
    phone: '09128884321',
    email: 'radynsfry011@gmail.com',
    company: 'دفتر مرکزی مستر دقیق (تهران، لاله زار)',
    password: 'admin',
    role: 'مدیر ارشد',
    status: 'active',
    registeredAt: '۱۴۰۳/۰۱/۰۱ - ۰۹:۰۰',
    inquiriesCount: 0,
    inquiries: [],
    notes: 'حساب اصلی مدیر و مدیریت فروشگاه'
  }
];

const FAKE_ACCOUNT_IDS = ['ACC-802140', 'ACC-802141', 'ACC-802142'];
const FAKE_ACCOUNT_PHONES = ['09121112233', '09194445566', '09357778899'];

// Helper to normalize phone numbers (convert Persian/Arabic digits to English)
function normalizePhone(str) {
  if (!str) return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  let clean = String(str).trim();
  for (let i = 0; i < 10; i++) {
    clean = clean.replace(new RegExp(persianDigits[i], 'g'), String(i));
    clean = clean.replace(new RegExp(arabicDigits[i], 'g'), String(i));
  }
  return clean.replace(/[\s\-\+]/g, '');
}

// Current Persian formatted date
function getPersianDateTime() {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    return formatter.format(now).replace(',', ' -');
  } catch (e) {
    return '۱۴۰۳/۰۱/۰۱ - ۱۲:۰۰';
  }
}

const AccountManager = {
  getAccounts() {
    try {
      const stored = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      let accounts = [];
      if (!stored) {
        accounts = [...INITIAL_ACCOUNTS];
      } else {
        const parsed = JSON.parse(stored);
        accounts = Array.isArray(parsed) && parsed.length > 0 ? parsed : [...INITIAL_ACCOUNTS];
      }

      // Automatically clean out fake/dummy accounts so only real accounts remain
      const cleaned = accounts.filter(acc => {
        if (!acc) return false;
        const norm = normalizePhone(acc.phone);
        if (FAKE_ACCOUNT_IDS.includes(acc.id)) return false;
        if (FAKE_ACCOUNT_PHONES.includes(norm)) return false;
        if (acc.fullName && (
          acc.fullName.includes('علیرضا رضایی') || 
          acc.fullName.includes('مریم فرهمند') || 
          acc.fullName.includes('مهندس کمالی')
        )) {
          return false;
        }
        return true;
      });

      // Ensure initial real admin account exists if no accounts remain
      if (cleaned.length === 0) {
        cleaned.push(...INITIAL_ACCOUNTS);
      }

      // If any fake accounts were removed or initial setup, persist
      if (cleaned.length !== accounts.length || !stored) {
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(cleaned));
      }

      return cleaned;
    } catch (e) {
      return [...INITIAL_ACCOUNTS];
    }
  },

  getAccountById(id) {
    if (!id) return null;
    const accounts = this.getAccounts();
    return accounts.find(a => a.id === id || a.phone === id);
  },

  saveAccounts(accounts) {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
    window.dispatchEvent(new CustomEvent('mrdaghigh:accounts_updated', { detail: accounts }));
  },

  findAccountByPhone(phone) {
    const norm = normalizePhone(phone);
    const accounts = this.getAccounts();
    return accounts.find(a => normalizePhone(a.phone) === norm || normalizePhone(a.id) === norm);
  },

  register({ fullName, phone, company, password, role = 'مشتری صنعتی', status = 'active', notes = '' }, options = {}) {
    const norm = normalizePhone(phone);
    if (!fullName || !fullName.trim()) {
      return { success: false, message: 'لطفاً نام و نام خانوادگی را وارد نمایید.' };
    }
    if (!norm || norm.length < 10) {
      return { success: false, message: 'لطفاً شماره موبایل معتبر (مثلاً ۰۹۱۲۳۴۵۶۷۸۹) وارد فرمایید.' };
    }
    if (!password || password.length < 4) {
      return { success: false, message: 'رمز عبور باید حداقل ۴ کاراکتر باشد.' };
    }

    const accounts = this.getAccounts();
    if (accounts.some(a => normalizePhone(a.phone) === norm)) {
      return { 
        success: false, 
        alreadyRegistered: true, 
        message: 'این شماره تماس قبلاً در سیستم ثبت شده است!' 
      };
    }

    const newAccount = {
      id: 'ACC-' + Math.floor(100000 + Math.random() * 900000),
      fullName: fullName.trim(),
      phone: norm,
      company: (company && company.trim()) ? company.trim() : 'واحد صنعتی / مشتری آزاد',
      password: password,
      role: role || 'مشتری صنعتی',
      status: status || 'active',
      registeredAt: getPersianDateTime(),
      inquiriesCount: 0,
      inquiries: [],
      notes: notes || (options.byAdmin ? 'ثبت مستقیم توسط مدیر سیستم' : 'ثبت‌نام آنلاین از طریق سایت')
    };

    accounts.unshift(newAccount);
    this.saveAccounts(accounts);
    
    // Only switch session if not registered by admin
    if (!options.skipLogin) {
      this.setCurrentUser(newAccount);
    }

    return { success: true, account: newAccount };
  },

  login(phoneOrUser, password) {
    const norm = normalizePhone(phoneOrUser);
    const accounts = this.getAccounts();
    const account = accounts.find(a => 
      normalizePhone(a.phone) === norm || 
      a.id.toLowerCase() === phoneOrUser.trim().toLowerCase() ||
      (a.fullName && a.fullName.trim().toLowerCase() === phoneOrUser.trim().toLowerCase()) ||
      (a.email && a.email.toLowerCase() === phoneOrUser.trim().toLowerCase())
    );

    if (!account) {
      return { 
        success: false, 
        notRegistered: true, 
        message: 'ثبت نشده است! حسابی با این مشخصات در سیستم یافت نشد.' 
      };
    }

    // Blocked check: If account is blocked, reject login!
    if (account.status === 'blocked' || account.status === 'مسدود') {
      return {
        success: false,
        isBlocked: true,
        message: 'این حساب کاربری توسط مدیریت مسدود شده است! جهت رفع مسدودیت با پشتیبانی تماس بگیرید.'
      };
    }

    if (account.password && account.password !== password) {
      return { 
        success: false, 
        wrongPassword: true, 
        message: 'رمز عبور وارد شده نادرست است.' 
      };
    }

    this.setCurrentUser(account);
    return { success: true, user: account };
  },

  getCurrentUser() {
    try {
      const u = localStorage.getItem(CURRENT_USER_KEY);
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  },

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
    window.dispatchEvent(new CustomEvent('mrdaghigh:auth_state_changed', { detail: user }));
    updateHeaderAccountUI();
  },

  logout() {
    this.setCurrentUser(null);
    showToast('با موفقیت از حساب کاربری خارج شدید.', 'info');
  },

  deleteAccount(id) {
    let accounts = this.getAccounts();
    accounts = accounts.filter(a => a.id !== id);
    this.saveAccounts(accounts);
    const curr = this.getCurrentUser();
    if (curr && curr.id === id) {
      this.logout();
    }
    return true;
  },

  toggleBlock(id) {
    const accounts = this.getAccounts();
    const acc = accounts.find(a => a.id === id);
    if (!acc) return null;

    const wasBlocked = (acc.status === 'blocked' || acc.status === 'مسدود');
    acc.status = wasBlocked ? 'active' : 'blocked';
    this.saveAccounts(accounts);

    // If currently logged-in user is the one being blocked, force logout!
    const curr = this.getCurrentUser();
    if (curr && (curr.id === id || normalizePhone(curr.phone) === normalizePhone(acc.phone)) && acc.status === 'blocked') {
      this.setCurrentUser(null);
      showToast('حساب شما توسط مدیریت مسدود گردید و از سامانه خارج شدید.', 'error');
    }

    return acc;
  },

  updateStatus(id, newStatus) {
    const accounts = this.getAccounts();
    const target = accounts.find(a => a.id === id);
    if (target) {
      target.status = newStatus;
      this.saveAccounts(accounts);
      return true;
    }
    return false;
  },

  purgeFakeAccounts() {
    const accounts = this.getAccounts().filter(acc => {
      if (!acc) return false;
      const norm = normalizePhone(acc.phone);
      if (FAKE_ACCOUNT_IDS.includes(acc.id)) return false;
      if (FAKE_ACCOUNT_PHONES.includes(norm)) return false;
      if (acc.fullName && (
        acc.fullName.includes('علیرضا رضایی') || 
        acc.fullName.includes('مریم فرهمند') || 
        acc.fullName.includes('مهندس کمالی')
      )) {
        return false;
      }
      return true;
    });

    if (accounts.length === 0) {
      accounts.push(...INITIAL_ACCOUNTS);
    }

    this.saveAccounts(accounts);
    return accounts;
  },

  exportJSON() {
    const data = JSON.stringify(this.getAccounts(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mrdaghigh_accounts_domain_export_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('فایل تفکیک‌شده حساب‌ها جهت استقرار روی دامین دانلود شد.', 'success');
  }
};

/**
 * Global User Authentication Modal Controller
 */
function openAuthModal(defaultTab = 'login', prefillPhone = '') {
  let modal = document.getElementById('authModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'authModal';
    modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity';
    modal.innerHTML = `
      <div class="bg-surface-container-lowest text-on-surface rounded-2xl max-w-md w-full p-6 shadow-2xl border border-surface-container-high relative flex flex-col gap-4 font-body-md" dir="rtl">
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-surface-container pb-3">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-xl bg-primary-container/15 text-primary-container flex items-center justify-center font-bold">
              <span class="material-symbols-outlined text-2xl">account_circle</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-sm text-lg font-bold text-on-surface">حساب کاربری مستر دقیق</h3>
              <span class="text-xs text-secondary">پرتال مشتریان، مهندسان و استعلام صنعتی</span>
            </div>
          </div>
          <button type="button" onclick="closeAuthModal()" class="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-secondary hover:text-on-surface transition-colors">
            <span class="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <!-- Tabs -->
        <div class="flex rounded-xl bg-surface-container-low p-1 border border-surface-container">
          <button type="button" id="tabBtnLogin" onclick="switchAuthTab('login')" class="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-on-surface bg-surface-container-lowest shadow-sm">
            ورود به حساب
          </button>
          <button type="button" id="tabBtnRegister" onclick="switchAuthTab('register')" class="flex-1 py-2 text-xs font-bold rounded-lg transition-all text-secondary hover:text-on-surface">
            ثبت‌نام حساب جدید
          </button>
        </div>

        <!-- Alert / Feedback Area -->
        <div id="authAlertArea" class="hidden"></div>

        <!-- LOGIN FORM -->
        <form id="authLoginForm" onsubmit="handleAuthLogin(event)" class="flex flex-col gap-3">
          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">شماره تماس یا شناسه کاربری:</label>
            <div class="relative flex items-center">
              <span class="material-symbols-outlined absolute right-3 text-secondary text-lg">phone_android</span>
              <input type="text" id="loginPhoneInput" required placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" class="w-full bg-surface-container-low pr-10 pl-3 py-2.5 rounded-lg text-sm outline-none border border-surface-container font-label-mono-md focus:border-primary focus:bg-surface-container-lowest transition-all">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">کلمه عبور:</label>
            <div class="relative flex items-center">
              <span class="material-symbols-outlined absolute right-3 text-secondary text-lg">lock</span>
              <input type="password" id="loginPasswordInput" required placeholder="رمز عبور حساب کاربری" dir="ltr" class="w-full bg-surface-container-low pr-10 pl-3 py-2.5 rounded-lg text-sm outline-none border border-surface-container font-label-mono-md focus:border-primary focus:bg-surface-container-lowest transition-all">
            </div>
            <div class="mt-1 text-right">
              <span class="text-[11px] text-secondary">رمز پیش‌فرض اکانت‌های تستی: <code class="bg-surface-container px-1 rounded font-label-mono-sm">user1234</code></span>
            </div>
          </div>

          <button type="submit" id="loginSubmitBtn" class="w-full mt-2 bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
            <span class="material-symbols-outlined text-xl">login</span>
            <span>ورود به حساب کاربری</span>
          </button>

          <div class="text-center pt-2 border-t border-surface-container text-xs text-secondary">
            <span>هنوز حسابی ندارید؟</span>
            <button type="button" onclick="switchAuthTab('register')" class="text-primary font-bold hover:underline mr-1">ثبت‌نام و عضویت سریع</button>
          </div>
        </form>

        <!-- REGISTER FORM -->
        <form id="authRegisterForm" onsubmit="handleAuthRegister(event)" class="hidden flex flex-col gap-3">
          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">نام و نام خانوادگی:</label>
            <div class="relative flex items-center">
              <span class="material-symbols-outlined absolute right-3 text-secondary text-lg">person</span>
              <input type="text" id="registerNameInput" required placeholder="مثال: مهندس کاوه موسوی" class="w-full bg-surface-container-low pr-10 pl-3 py-2 rounded-lg text-sm outline-none border border-surface-container focus:border-primary focus:bg-surface-container-lowest transition-all">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">شماره موبایل (جهت استعلام و پیش‌فاکتور):</label>
            <div class="relative flex items-center">
              <span class="material-symbols-outlined absolute right-3 text-secondary text-lg">phone_android</span>
              <input type="text" id="registerPhoneInput" required placeholder="۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" class="w-full bg-surface-container-low pr-10 pl-3 py-2 rounded-lg text-sm outline-none border border-surface-container font-label-mono-md focus:border-primary focus:bg-surface-container-lowest transition-all">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">نام شرکت، کارگاه یا دانشگاه (اختیاری):</label>
            <div class="relative flex items-center">
              <span class="material-symbols-outlined absolute right-3 text-secondary text-lg">business</span>
              <input type="text" id="registerCompanyInput" placeholder="مثال: صنایع الکترونیک، یا خریدار شخصی" class="w-full bg-surface-container-low pr-10 pl-3 py-2 rounded-lg text-sm outline-none border border-surface-container focus:border-primary focus:bg-surface-container-lowest transition-all">
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-xs font-semibold text-secondary mb-1">رمز عبور:</label>
              <input type="password" id="registerPasswordInput" required placeholder="حداقل ۴ کاراکتر" dir="ltr" class="w-full bg-surface-container-low px-3 py-2 rounded-lg text-sm outline-none border border-surface-container font-label-mono-md focus:border-primary transition-all">
            </div>
            <div>
              <label class="block text-xs font-semibold text-secondary mb-1">تکرار رمز عبور:</label>
              <input type="password" id="registerConfirmPasswordInput" required placeholder="تکرار رمز" dir="ltr" class="w-full bg-surface-container-low px-3 py-2 rounded-lg text-sm outline-none border border-surface-container font-label-mono-md focus:border-primary transition-all">
            </div>
          </div>

          <button type="submit" id="registerSubmitBtn" class="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
            <span class="material-symbols-outlined text-xl">how_to_reg</span>
            <span>ثبت‌نام و ایجاد حساب کاربری</span>
          </button>

          <div class="text-center pt-2 border-t border-surface-container text-xs text-secondary">
            <span>قبلاً ثبت‌نام کرده‌اید؟</span>
            <button type="button" onclick="switchAuthTab('login')" class="text-primary font-bold hover:underline mr-1">ورود به حساب</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Clear alert and prepare inputs
  const alertArea = document.getElementById('authAlertArea');
  if (alertArea) alertArea.className = 'hidden';

  switchAuthTab(defaultTab, prefillPhone);
  modal.classList.remove('hidden');
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.add('hidden');
}

function switchAuthTab(tab, prefillPhone = '') {
  const btnLogin = document.getElementById('tabBtnLogin');
  const btnRegister = document.getElementById('tabBtnRegister');
  const formLogin = document.getElementById('authLoginForm');
  const formRegister = document.getElementById('authRegisterForm');
  const alertArea = document.getElementById('authAlertArea');

  if (!btnLogin || !btnRegister) return;

  if (tab === 'register') {
    btnLogin.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition-all text-secondary hover:text-on-surface';
    btnRegister.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition-all text-on-surface bg-surface-container-lowest shadow-sm';
    formLogin.classList.add('hidden');
    formRegister.classList.remove('hidden');

    if (prefillPhone) {
      const pInput = document.getElementById('registerPhoneInput');
      if (pInput) {
        pInput.value = prefillPhone;
        setTimeout(() => pInput.focus(), 50);
      }
    }
  } else {
    btnRegister.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition-all text-secondary hover:text-on-surface';
    btnLogin.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition-all text-on-surface bg-surface-container-lowest shadow-sm';
    formRegister.classList.add('hidden');
    formLogin.classList.remove('hidden');

    if (prefillPhone) {
      const pInput = document.getElementById('loginPhoneInput');
      if (pInput) {
        pInput.value = prefillPhone;
        setTimeout(() => pInput.focus(), 50);
      }
    }
  }

  if (alertArea && !prefillPhone) {
    alertArea.className = 'hidden';
    alertArea.innerHTML = '';
  }
}

function handleAuthLogin(event) {
  event.preventDefault();
  const phone = document.getElementById('loginPhoneInput').value.trim();
  const password = document.getElementById('loginPasswordInput').value;
  const alertArea = document.getElementById('authAlertArea');

  const res = AccountManager.login(phone, password);

  if (!res.success) {
    alertArea.className = 'block p-3.5 bg-error-container/40 border border-error/30 rounded-xl text-xs text-on-surface flex flex-col gap-2 font-body-md animate-fade-in';
    
    if (res.isBlocked) {
      alertArea.innerHTML = `
        <div class="flex items-center gap-2 font-bold text-error">
          <span class="material-symbols-outlined text-lg">block</span>
          <span>حساب کاربری مسدود شده است!</span>
        </div>
        <p class="text-secondary leading-relaxed">
          دسترسی این حساب کاربری توسط مدیریت سامانه مستر دقیق مسدود شده است. جهت بررسی و رفع مسدودیت با پشتیبانی تماس حاصل فرمایید.
        </p>
        <div class="pt-1">
          <a href="contact.html" class="inline-flex items-center gap-1.5 text-primary hover:underline font-bold text-xs">
            <span class="material-symbols-outlined text-sm">support_agent</span>
            <span>تماس با پشتیبانی مستر دقیق</span>
          </a>
        </div>
      `;
    } else if (res.notRegistered) {
      alertArea.innerHTML = `
        <div class="flex items-center gap-2 font-bold text-error">
          <span class="material-symbols-outlined text-lg">error</span>
          <span>ثبت نشده است!</span>
        </div>
        <p class="text-secondary leading-relaxed">
          حساب کاربری با شماره یا شناسه «<strong dir="ltr" class="text-on-surface font-label-mono-md">${phone}</strong>» در سیستم مستر دقیق یافت نشد.
        </p>
        <div class="pt-1">
          <button type="button" onclick="switchAuthTab('register', '${phone}')" class="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-bold py-1.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs">
            <span class="material-symbols-outlined text-sm">how_to_reg</span>
            <span>ایجاد حساب و ثبت‌نام با همین شماره</span>
          </button>
        </div>
      `;
    } else {
      alertArea.innerHTML = `
        <div class="flex items-center gap-2 font-bold text-error">
          <span class="material-symbols-outlined text-lg">lock_reset</span>
          <span>رمز عبور اشتباه است!</span>
        </div>
        <p class="text-secondary leading-relaxed">کلمه عبور وارد شده با مشخصات حساب مطابقت ندارد. لطفاً دوباره بررسی فرمایید.</p>
      `;
    }
    return;
  }

  // Success
  alertArea.className = 'block p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center gap-2 font-body-md animate-fade-in';
  alertArea.innerHTML = `
    <span class="material-symbols-outlined text-emerald-700 text-xl">check_circle</span>
    <div>
      <span class="font-bold text-emerald-800">خوش آمدید، ${res.user.fullName}!</span>
      <span class="block text-[11px] text-emerald-700">ورود به حساب کاربری با موفقیت انجام شد.</span>
    </div>
  `;

  showToast(`خوش آمدید، ${res.user.fullName}!`, 'success');
  setTimeout(() => {
    closeAuthModal();
  }, 1200);
}

function handleAuthRegister(event) {
  event.preventDefault();
  const fullName = document.getElementById('registerNameInput').value.trim();
  const phone = document.getElementById('registerPhoneInput').value.trim();
  const company = document.getElementById('registerCompanyInput').value.trim();
  const password = document.getElementById('registerPasswordInput').value;
  const confirmPassword = document.getElementById('registerConfirmPasswordInput').value;
  const alertArea = document.getElementById('authAlertArea');

  if (password !== confirmPassword) {
    alertArea.className = 'block p-3 bg-error-container/40 border border-error/30 rounded-xl text-xs text-error font-bold flex items-center gap-2 font-body-md animate-fade-in';
    alertArea.innerHTML = `
      <span class="material-symbols-outlined text-base">error</span>
      <span>کلمه عبور و تکرار آن با یکدیگر تطابق ندارند!</span>
    `;
    return;
  }

  const res = AccountManager.register({ fullName, phone, company, password });

  if (!res.success) {
    alertArea.className = 'block p-3 bg-error-container/40 border border-error/30 rounded-xl text-xs text-error font-bold flex items-center gap-2 font-body-md animate-fade-in';
    alertArea.innerHTML = `
      <span class="material-symbols-outlined text-base">error</span>
      <span>${res.message}</span>
    `;
    if (res.alreadyRegistered) {
      setTimeout(() => switchAuthTab('login', phone), 1500);
    }
    return;
  }

  // Exact requested feedback: "ثبت شد"
  alertArea.className = 'block p-4 bg-emerald-50 border-2 border-emerald-500 rounded-xl text-xs text-emerald-950 flex flex-col gap-2 font-body-md animate-fade-in';
  alertArea.innerHTML = `
    <div class="flex items-center gap-2 font-bold text-emerald-800 text-sm">
      <span class="material-symbols-outlined text-xl text-emerald-600">verified</span>
      <span>ثبت شد! حساب کاربری شما با موفقیت فعال گردید.</span>
    </div>
    <p class="text-emerald-800 leading-relaxed text-[12px]">
      مشخصات اکانت شما در پایگاه داده ذخیره شد و مستقیماً به پنل مدیریت مستر دقیق ارسال گردید. هم‌اکنون وارد سیستم شدید.
    </p>
    <div class="flex items-center gap-2 font-label-mono-sm text-[11px] text-emerald-700 bg-emerald-100/60 p-2 rounded-lg">
      <span>کد اختصاصی اشتراک شما:</span>
      <span class="font-bold text-emerald-950">${res.account.id}</span>
    </div>
  `;

  showToast(`ثبت شد! حساب کاربری ${res.account.fullName} فعال گردید`, 'success');
  setTimeout(() => {
    closeAuthModal();
  }, 1800);
}

/**
 * Update Header Account Button across all pages
 */
function updateHeaderAccountUI() {
  const user = AccountManager.getCurrentUser();
  const accountButtons = document.querySelectorAll('a[data-path="login"], button[data-path="login"]');

  accountButtons.forEach(btn => {
    // Guarantee link never navigates to contact.html or any other page
    if (btn.tagName === 'A') {
      btn.setAttribute('href', 'javascript:void(0)');
    }
    btn.classList.add('relative', 'cursor-pointer');

    if (user) {
      btn.innerHTML = `
        <div class="relative">
          <span class="material-symbols-outlined text-headline-sm text-primary">account_circle</span>
          <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-surface"></span>
        </div>
        <div class="flex flex-col text-right">
          <span class="font-body-sm text-body-sm text-secondary truncate max-w-[120px]">${user.company || 'مشتری صنعتی'}</span>
          <span class="font-title-md text-title-md font-bold text-primary truncate max-w-[140px]">${user.fullName}</span>
        </div>
      `;
      btn.onclick = (e) => {
        e.preventDefault();
        toggleUserDropdown(btn, user);
      };
    } else {
      btn.innerHTML = `
        <span class="material-symbols-outlined text-headline-sm text-secondary">account_circle</span>
        <div class="flex flex-col text-right">
          <span class="font-body-sm text-body-sm text-secondary">حساب کاربری</span>
          <span class="font-title-md text-title-md font-bold text-on-surface">ورود / عضویت</span>
        </div>
      `;
      btn.onclick = (e) => {
        e.preventDefault();
        openAuthModal('login');
      };
    }
  });
}

function toggleUserDropdown(triggerEl, user) {
  let dropdown = document.getElementById('userProfileDropdown');
  if (dropdown) {
    dropdown.remove();
    return;
  }

  dropdown = document.createElement('div');
  dropdown.id = 'userProfileDropdown';
  dropdown.className = 'absolute top-full left-0 mt-2 w-72 bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high p-4 z-50 flex flex-col gap-3 font-body-md text-right text-on-surface';
  dropdown.dir = 'rtl';
  dropdown.innerHTML = `
    <div class="flex items-center gap-3 pb-3 border-b border-surface-container">
      <div class="w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold">
        <span class="material-symbols-outlined text-xl">person</span>
      </div>
      <div class="flex flex-col overflow-hidden">
        <span class="font-bold text-sm text-on-surface truncate">${user.fullName}</span>
        <span class="text-xs text-secondary font-label-mono-sm" dir="ltr">${user.phone}</span>
      </div>
    </div>

    <div class="flex flex-col gap-1.5 text-xs text-secondary">
      <div class="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded-lg">
        <span>کد اشتراک اختصاصی:</span>
        <span class="font-bold font-label-mono-md text-primary" dir="ltr">${user.id}</span>
      </div>
      <div class="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded-lg">
        <span>وضعیت حساب:</span>
        <span class="text-emerald-700 font-bold flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          ${user.status || 'ثبت‌شده و فعال'}
        </span>
      </div>
      <div class="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded-lg">
        <span>وابستگی صنعتی:</span>
        <span class="text-on-surface font-medium truncate max-w-[140px]">${user.company || 'مستقل'}</span>
      </div>
    </div>

    <div class="pt-2 border-t border-surface-container flex flex-col gap-1.5">
      <a href="admin.html" class="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold flex items-center justify-between transition-colors">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-base text-primary">admin_panel_settings</span>
          <span>ورود به پنل مدیریت</span>
        </span>
        <span class="material-symbols-outlined text-sm">chevron_left</span>
      </a>

      <button type="button" onclick="AccountManager.logout(); document.getElementById('userProfileDropdown')?.remove();" class="w-full py-2 px-3 rounded-lg hover:bg-error-container/30 text-error text-xs font-bold flex items-center gap-2 transition-colors">
        <span class="material-symbols-outlined text-base">logout</span>
        <span>خروج از حساب کاربری</span>
      </button>
    </div>
  `;

  triggerEl.parentElement.style.position = 'relative';
  triggerEl.parentElement.appendChild(dropdown);

  // Close on outside click
  const closeListener = (ev) => {
    if (!dropdown.contains(ev.target) && !triggerEl.contains(ev.target)) {
      dropdown.remove();
      document.removeEventListener('click', closeListener);
    }
  };
  setTimeout(() => document.addEventListener('click', closeListener), 10);
}

function initAccountAuthListeners() {
  window.addEventListener('mrdaghigh:accounts_updated', () => {
    updateHeaderAccountUI();
  });
  window.addEventListener('mrdaghigh:auth_state_changed', () => {
    updateHeaderAccountUI();
  });
}

// Global window assignments for HTML inline events
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleAuthLogin = handleAuthLogin;
window.handleAuthRegister = handleAuthRegister;
window.handleUserLogin = handleAuthLogin;
window.handleUserRegister = handleAuthRegister;
window.openInquiryModal = openInquiryModal;
window.closeInquiryModal = closeInquiryModal;
window.orderViaTelegram = orderViaTelegram;
window.AccountManager = AccountManager;

