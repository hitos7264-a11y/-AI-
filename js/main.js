/* ============================================================
   main.js — 初期化 / 共通動作
============================================================ */

(function () {
  'use strict';

  // ====== ヘッダー共通HTMLの挿入 ======
  function mountHeader() {
    const target = document.querySelector('[data-mount="header"]');
    if (!target) return;
    target.innerHTML = `
      <header class="app-header">
        <div class="app-header__inner">
          <a href="${getHome()}index.html" class="app-header__logo">
            <span class="logo-mark" aria-hidden="true"></span>
            <span class="app-header__logo-text">
              日本AI基盤モデル開発
              <small>JAPAN AI FOUNDATION MODEL</small>
            </span>
          </a>
          <button class="menu-btn" id="js-menu-open" aria-label="メニューを開く">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
      <div class="read-progress" id="js-progress"></div>
    `;
  }

  // ====== ボトムナビ共通HTMLの挿入 ======
  function mountBottomNav(currentPage) {
    const target = document.querySelector('[data-mount="bottomnav"]');
    if (!target) return;
    const items = [
      { href: 'index.html',          icon: 'fa-house',       label: 'ホーム',   key: 'home' },
      { href: 'pages/timeline.html', icon: 'fa-timeline',    label: '年表',     key: 'timeline' },
      { href: 'pages/companies.html',icon: 'fa-building',    label: '企業',     key: 'companies' },
      { href: 'pages/sources.html',  icon: 'fa-book',        label: '出典',     key: 'sources' },
    ];
    const home = getHome();
    target.innerHTML = `
      <nav class="bottom-nav" aria-label="主要ナビゲーション">
        ${items.map(it => `
          <a href="${home}${it.href}" class="bottom-nav__item ${currentPage===it.key?'is-active':''}">
            <i class="fa-solid ${it.icon}"></i>
            <span>${it.label}</span>
          </a>
        `).join('')}
      </nav>
    `;
  }

  // ====== ドロワー共通HTMLの挿入 ======
  function mountDrawer(currentSlug) {
    const target = document.querySelector('[data-mount="drawer"]');
    if (!target) return;
    const home = getHome();
    const chapters = window.SITE_DATA ? window.SITE_DATA.chapters : [];
    target.innerHTML = `
      <aside class="drawer" id="js-drawer" aria-hidden="true">
        <div class="drawer__scrim" data-drawer-close></div>
        <nav class="drawer__panel" aria-label="目次">
          <div class="drawer__header">
            <h2 class="drawer__title">全目次</h2>
            <button class="drawer__close" data-drawer-close aria-label="閉じる">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="drawer__section">
            <div class="drawer__section-title">サイト</div>
            <div class="drawer__list">
              <a href="${home}index.html" class="drawer__link ${!currentSlug?'is-active':''}">
                <span class="idx"><i class="fa-solid fa-house"></i></span>
                <span>トップページ</span>
              </a>
              <a href="${home}pages/timeline.html" class="drawer__link ${currentSlug==='timeline'?'is-active':''}">
                <span class="idx"><i class="fa-solid fa-timeline"></i></span>
                <span>完全年表</span>
              </a>
              <a href="${home}pages/companies.html" class="drawer__link ${currentSlug==='companies'?'is-active':''}">
                <span class="idx"><i class="fa-solid fa-building"></i></span>
                <span>出資企業一覧</span>
              </a>
              <a href="${home}pages/sources.html" class="drawer__link ${currentSlug==='sources'?'is-active':''}">
                <span class="idx"><i class="fa-solid fa-book"></i></span>
                <span>出典（109件）</span>
              </a>
              <a href="${home}pages/faq.html" class="drawer__link ${currentSlug==='faq'?'is-active':''}">
                <span class="idx"><i class="fa-solid fa-circle-question"></i></span>
                <span>FAQ</span>
              </a>
            </div>
          </div>

          <div class="drawer__section">
            <div class="drawer__section-title">全15章</div>
            <div class="drawer__list">
              ${chapters.map(c => `
                <a href="${home}pages/${c.slug}.html" class="drawer__link ${currentSlug===c.slug?'is-active':''}">
                  <span class="idx">${c.id}</span>
                  <span>${c.title}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <div class="drawer__section">
            <div class="drawer__section-title">メタ情報</div>
            <div style="padding:12px; font-size:11px; color:var(--c-text-dim); line-height:1.8;">
              本サイトは2026年4月19日公表の調査レポートに基づき構築された特設Webサイトです。<br><br>
              調査：109件の一次・二次ソースをクロスチェック。<br>
              構築日：2026年4月19日
            </div>
          </div>
        </nav>
      </aside>
    `;
  }

  // ====== フッター共通HTMLの挿入 ======
  function mountFooter() {
    const target = document.querySelector('[data-mount="footer"]');
    if (!target) return;
    target.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__title">日本AI基盤モデル開発</div>
          <div class="site-footer__meta">
            四社合同の国産AI大勝負／2026年4月19日<br>
            中核：ソフトバンク・NEC・ホンダ・ソニーグループ<br>
            出資企業：8社＋PFN技術連携
          </div>
          <div class="site-footer__credit">
            © 2026 Japan AI Foundation Model Development Special Site<br>
            調査ソース：109件／本レポートはOpus4.7で2026年4月19日に作成
          </div>
        </div>
      </footer>
    `;
  }

  // 相対パスを決定（ルート or pages/ サブページ）
  function getHome() {
    return (location.pathname.indexOf('/pages/') !== -1) ? '../' : '';
  }

  // ドロワー開閉
  function initDrawer() {
    const drawer = document.getElementById('js-drawer');
    const openBtn = document.getElementById('js-menu-open');
    if (!drawer || !openBtn) return;

    openBtn.addEventListener('click', () => drawer.classList.add('is-open'));
    drawer.querySelectorAll('[data-drawer-close]').forEach(el => {
      el.addEventListener('click', () => drawer.classList.remove('is-open'));
    });
    // ESCで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') drawer.classList.remove('is-open');
    });
  }

  // リーディング進捗バー
  function initReadProgress() {
    const bar = document.getElementById('js-progress');
    if (!bar) return;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // トップへ
  function initToTop() {
    const btn = document.querySelector('.to-top');
    if (!btn) return;
    const update = () => {
      if (window.scrollY > 600) btn.classList.add('is-visible');
      else btn.classList.remove('is-visible');
    };
    window.addEventListener('scroll', update, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    update();
  }

  // スクロール登場アニメーション
  function initScrollReveal() {
    const targets = document.querySelectorAll(
      '.anim-fade-up, .anim-fade-in, .anim-scale-in, .anim-slide-left, .anim-stagger'
    );
    if (!('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(t => io.observe(t));
  }

  // アコーディオン
  function initAccordion() {
    document.querySelectorAll('.accordion__trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.accordion__item');
        if (item) item.classList.toggle('is-open');
      });
    });
  }

  // 数値カウントアップ
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) {
      counters.forEach(c => c.textContent = c.dataset.counter);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.counter);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const dur = parseInt(el.dataset.dur || '1400', 10);
        const start = performance.now();
        function step(now) {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = target * eased;
          el.textContent = v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  }

  // プログレスバー幅（data-pct）のアニメ起動
  function initProgressBars() {
    const bars = document.querySelectorAll('[data-pct]');
    if (!('IntersectionObserver' in window)) {
      bars.forEach(b => b.style.width = b.dataset.pct + '%');
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.pct + '%';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    bars.forEach(b => io.observe(b));
  }

  // 公開API
  window.JAFM = {
    mountHeader,
    mountBottomNav,
    mountDrawer,
    mountFooter,
    getHome,
    init(currentPage, currentSlug) {
      mountHeader();
      mountDrawer(currentSlug || null);
      mountBottomNav(currentPage || null);
      mountFooter();
      initDrawer();
      initReadProgress();
      initToTop();
      initScrollReveal();
      initAccordion();
      initCounters();
      initProgressBars();
    }
  };
})();
