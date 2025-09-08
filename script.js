// script.js - GL + i18n
const GLApp = (function () {
  // ---- I18N dictionaries (EN + SW) ----
  const I18N = {
    en: {
      // top / menu
      "menu.reports":"Reports",
      "menu.accounts":"Accounts",
      "menu.budgets":"Budgets",
      "menu.settings":"Settings",
      "submenu.accounting":"Accounting Core",
      "acct.generalLedger":"General Ledger",
      "acct.accountsReceivable":"Accounts Receivable",
      "acct.accountsPayable":"Accounts Payable",
      "acct.bankLedger":"Bank Ledger",
      "acct.auditTrail":"Audit Trail",
      "acct.expenseManagement":"Expense Management",
      "acct.cashBook":"Cash Book (TSH & USD)",
      "menu.budgeting":"Budgeting & Planning",
      "submenu.settings.userManagement":"User Management",

      // page / buttons / labels
      "gl.title":"General Ledger",
      "gl.subtitle":"Record and view double-entry transactions. Transactions from other modules should post here automatically (you can simulate posts).",
      "btn.import":"Import Journal CSV",
      "btn.export":"Export Journal",
      "gl.createJournal":"Create Journal Entry",
      "label.date":"Date",
      "label.reference":"Reference",
      "ph.date":"dd - mm - yyyy",
      "ph.reference":"Ref (e.g. INV-1001)",
      "label.lines":"Lines",
      "btn.addLine":"+ Add Line",
      "btn.clear":"Clear",
      "hint.balance":"Double-entry must balance (Total Debits = Total Credits)",
      "label.debits":"Debits:",
      "label.credits":"Credits:",
      "btn.simulate":"Simulate Expense Post",
      "btn.post":"Post to GL",
      "gl.journalEntries":"Journal Entries",
      "ph.filter":"Filter by account code or name",
      "btn.reset":"Reset",
      "table.date":"Date",
      "table.ref":"Ref",
      "table.description":"Description",
      "table.lines":"Lines",
      "table.debit":"Debit",
      "table.credit":"Credit",
      "trial.title":"Trial Balance",
      "trial.subtitle":"Shows closing debit/credit balances by account",
      "table.account":"Account",
      "table.total":"Total",
      "ledger.utilities":"Ledger Utilities",
      "ledger.quickPostLabel":"Quick Post (pick account)",
      "ph.selectAccount":"-- Select account --",
      "ph.amount":"Amount",
      "opt.debit":"Debit",
      "opt.credit":"Credit",
      "btn.quickPost":"Quick Post",
      "btn.recalculate":"Recalculate",
      "ledger.accountLedger":"Account Ledger",
      "ph.accountFilter":"Account code/name",
      "btn.open":"Open",
      "notes.title":"Notes",
      "notes.text":"This is a front-end demo. In production your AP/AR/Expenses/Bank modules should auto post to the GL API. Use the Simulate button to test auto-post behaviour.",
      "btn.logout":"Logout"
    },

    sw: {
      // top / menu (translated)
      "menu.reports":"Ripoti",
      "menu.accounts":"Akaunti",
      "menu.budgets":"Bajeti",
      "menu.settings":"Mipangilio",
      "submenu.accounting":"Akaunti (Msingi)",
      "acct.generalLedger":"Kitabu Kikuu",
      "acct.accountsReceivable":"Mapokezi ya Akaunti",
      "acct.accountsPayable":"Malipo ya Akaunti",
      "acct.bankLedger":"Kitabu cha Benki",
      "acct.auditTrail":"Mfuatano wa Ukaguzi",
      "acct.expenseManagement":"Usimamizi wa Matumizi",
      "acct.cashBook":"Kitabu cha Fedha (TSH & USD)",
      "menu.budgeting":"Bajeti & Mipango",
      "submenu.settings.userManagement":"Usimamizi wa Watumiaji",

      // page / buttons / labels
      "gl.title":"Kitabu Kikuu",
      "gl.subtitle":"Rekodi na angalia miamala ya double-entry. Miamala kutoka sehemu zingine inapaswa kuingia hapa moja kwa moja (unaweza kujaribu kwa simulate).",
      "btn.import":"Ingiza Journal (CSV)",
      "btn.export":"Fungua Journal",
      "gl.createJournal":"Tengeneza Entry ya Journal",
      "label.date":"Tarehe",
      "label.reference":"Kumbukumbu",
      "ph.date":"dd - mm - yyyy",
      "ph.reference":"Ref (mf. INV-1001)",
      "label.lines":"Mistari",
      "btn.addLine":"+ Ongeza Mstari",
      "btn.clear":"Futa",
      "hint.balance":"Double-entry inapaswa kufanana (Debits = Credits)",
      "label.debits":"Debiti:",
      "label.credits":"Kredi:",
      "btn.simulate":"Sawa Post ya Gharama",
      "btn.post":"Weka kwenye GL",
      "gl.journalEntries":"Miamala ya Journal",
      "ph.filter":"Tafuta kwa msimbo au jina la akaunti",
      "btn.reset":"Anzisha tena",
      "table.date":"Tarehe",
      "table.ref":"Ref",
      "table.description":"Maelezo",
      "table.lines":"Mistari",
      "table.debit":"Debiti",
      "table.credit":"Kredi",
      "trial.title":"Jaribio la Mizania",
      "trial.subtitle":"Inaonyesha mizania ya debiti/kredi kwa kila akaunti",
      "table.account":"Akaunti",
      "table.total":"Jumla",
      "ledger.utilities":"Vyombo vya Kitabu",
      "ledger.quickPostLabel":"Post Haraka (chagua akaunti)",
      "ph.selectAccount":"-- Chagua akaunti --",
      "ph.amount":"Kiasi",
      "opt.debit":"Debiti",
      "opt.credit":"Kredi",
      "btn.quickPost":"Post Haraka",
      "btn.recalculate":"Hesabu tena",
      "ledger.accountLedger":"Kitabu cha Akaunti",
      "ph.accountFilter":"Msimbo / jina la akaunti",
      "btn.open":"Fungua",
      "notes.title":"Maelezo",
      "notes.text":"Hii ni demo ya mbele (front-end). Kwa uzalishaji, sehemu za AP/AR/Matumizi/Benki zinapaswa ku-post moja kwa moja kwa API ya GL. Tumia kitufe cha Simulate kujaribu.",
      "btn.logout":"Ondoka"
    }
  };

  // applyI18n updates textContent and placeholders
  function applyI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const text = (I18N[lang] && I18N[lang][key]) || null;
      if (text !== null) el.textContent = text;
    });
    // placeholders (inputs/selects)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      const text = (I18N[lang] && I18N[lang][key]) || null;
      if (text !== null) el.placeholder = text;
    });
  }

  function switchLanguage(btn, lang) {
    // toggle active class on language buttons
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyI18n(lang);
    console.log('Switched language to', lang);
  }

  // ---------- Sidebar helpers (same as before) ----------
  function setExpanded(btn, expanded) { btn.setAttribute('aria-expanded', String(expanded)); }
  function openSection(container) {
    container.style.display = 'block';
    const h = container.scrollHeight + 'px';
    container.style.maxHeight = h;
    container.style.opacity = '1';
    container.addEventListener('transitionend', function handler() {
      container.style.maxHeight = 'none';
      container.removeEventListener('transitionend', handler);
    });
  }
  function closeSection(container) {
    container.style.maxHeight = container.scrollHeight + 'px';
    container.style.opacity = '0';
    container.offsetHeight;
    container.style.maxHeight = '0px';
  }
  function toggleMenu(btn) {
    const item = btn.parentElement;
    const submenu = item.querySelector('.submenu');
    const willOpen = !item.classList.contains('open');
    document.querySelectorAll('.menu-item.open').forEach(it => {
      if (it !== item) {
        it.classList.remove('open');
        const sub = it.querySelector('.submenu');
        if (sub) closeSection(sub);
        const b = it.querySelector('.menu-toggle-btn');
        if (b) setExpanded(b, false);
      }
    });
    item.classList.toggle('open', willOpen);
    if (submenu) (willOpen ? openSection(submenu) : closeSection(submenu));
    setExpanded(btn, willOpen);
  }
  function toggleSubMenu(btn) {
    const submenuItem = btn.parentElement;
    const subsubmenu = submenuItem.querySelector('.subsubmenu');
    const willOpen = !submenuItem.classList.contains('open');
    const parent = submenuItem.parentElement;
    parent.querySelectorAll('.submenu-item.open').forEach(it => {
      if (it !== submenuItem) {
        it.classList.remove('open');
        const s = it.querySelector('.subsubmenu');
        if (s) closeSection(s);
        const b = it.querySelector('.submenu-toggle');
        if (b) setExpanded(b, false);
      }
    });
    submenuItem.classList.toggle('open', willOpen);
    if (subsubmenu) (willOpen ? openSection(subsubmenu) : closeSection(subsubmenu));
    setExpanded(btn, willOpen);
  }

  function loadPageFromElement(el) {
    const page = el.dataset.page || el.textContent.trim();
    if (!page) return;
    document.getElementById('pageTitle').textContent = page;
    document.querySelectorAll('.subsubmenu-item.active, .nav-item.active').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
  }

  function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    sb.classList.toggle('collapsed');
    const expanded = !sb.classList.contains('collapsed');
    document.getElementById('hamburger').setAttribute('aria-expanded', String(expanded));
  }
  function toggleMobileSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sb.classList.add('show');
    overlay.classList.add('show');
    document.getElementById('hamburger').setAttribute('aria-expanded', 'true');
  }
  function closeMobileSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sb.classList.remove('show');
    overlay.classList.remove('show');
    document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
  }
  function logout() {
    if (confirm((I18N['en']['btn.logout'] || 'Logout') + '?')) {
      window.location.href = 'index.html';
    }
  }

  // ---------- General Ledger (identical logic, namespaced) ----------
  const GL_KEY = 'ts_demo_gl_v1';
  const COA_KEY = 'coa_demo_accounts_v1';
  let journal = [];
  let coa = [];

  function genId() { return 'j' + Math.random().toString(36).slice(2, 9); }

  function loadCOA() {
    try { coa = JSON.parse(localStorage.getItem(COA_KEY) || '[]'); } catch (e) { coa = []; }
    const sel = document.getElementById('coaSelect');
    if (!sel) return;
    sel.innerHTML = '';
    // ensure placeholder option exists (UI placeholder uses i18n)
    const ph = document.createElement('option');
    ph.value = '';
    ph.textContent = (I18N['en']['ph.selectAccount'] || '-- Select account --');
    sel.appendChild(ph);

    if (!coa || coa.length === 0) {
      coa = [
        { id:'1', code:'1000', name:'Cash' },
        { id:'2', code:'1100', name:'Bank' },
        { id:'3', code:'2000', name:'Accounts Payable' },
        { id:'4', code:'3000', name:'Accounts Receivable' },
        { id:'5', code:'4000', name:'Expense - General' },
      ];
      localStorage.setItem(COA_KEY, JSON.stringify(coa));
    }
    coa.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a.code || a.id;
      opt.textContent = (a.code ? a.code + ' — ' : '') + a.name;
      sel.appendChild(opt);
    });
  }

  function loadJournal() {
    try { journal = JSON.parse(localStorage.getItem(GL_KEY) || '[]'); } catch (e) { journal = []; }
    renderJournal();
    renderTrialBalance();
  }

  function addLine(pref) {
    const wrapper = document.getElementById('linesWrapper');
    if (!wrapper) return;
    const div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = '2fr 1fr 100px 80px';
    div.style.gap = '8px';
    div.style.marginBottom = '8px';

    const accountSel = document.createElement('select');
    accountSel.innerHTML = '<option value="">-- select account --</option>';
    coa.forEach(a => {
      const o = document.createElement('option');
      o.value = a.code || a.id;
      o.textContent = (a.code ? a.code + ' — ' : '') + a.name;
      accountSel.appendChild(o);
    });
    if (pref && pref.account) accountSel.value = pref.account;

    const desc = document.createElement('input'); desc.type = 'text'; desc.placeholder = 'Narration / Description';
    if (pref && pref.desc) desc.value = pref.desc;

    const amt = document.createElement('input'); amt.type = 'number'; amt.step = '0.01'; amt.value = pref && pref.amount ? pref.amount : 0; amt.style.textAlign = 'right';

    const dc = document.createElement('select'); dc.innerHTML = '<option value="debit">Dr</option><option value="credit">Cr</option>'; if (pref && pref.dc) dc.value = pref.dc;

    const del = document.createElement('button'); del.textContent = '✖'; del.title = 'Remove line'; del.className = 'ghost small';
    del.onclick = () => { div.remove(); recalcSums(); };

    div.appendChild(accountSel); div.appendChild(desc); div.appendChild(amt); div.appendChild(dc);
    wrapper.appendChild(div);

    accountSel.focus();
    amt.oninput = recalcSums; dc.onchange = recalcSums; accountSel.onchange = recalcSums; desc.onchange = recalcSums;
    recalcSums();
  }

  function clearLines() {
    const wrapper = document.getElementById('linesWrapper'); if (!wrapper) return;
    wrapper.innerHTML = '';
    recalcSums();
  }

  function recalcSums() {
    const lines = Array.from(document.querySelectorAll('#linesWrapper > div'));
    let debit = 0, credit = 0;
    lines.forEach(div => {
      const selects = div.querySelectorAll('select');
      const dc = selects[1].value;
      const amt = parseFloat(div.querySelector('input[type=number]').value || 0);
      if (dc === 'debit') debit += amt; else credit += amt;
    });
    const sd = document.getElementById('sumDebits'), sc = document.getElementById('sumCredits');
    if (sd) sd.textContent = Number(debit).toLocaleString(undefined, { maximumFractionDigits: 2 });
    if (sc) sc.textContent = Number(credit).toLocaleString(undefined, { maximumFractionDigits: 2 });
    return { debit, credit };
  }

  function saveJournalEntry(e) {
    if (e) e.preventDefault();
    const date = document.getElementById('jeDate').value;
    const ref = document.getElementById('jeRef').value.trim();
    const linesDiv = Array.from(document.querySelectorAll('#linesWrapper > div'));
    if (!date) { showMsg((I18N['en']['label.date']||'Please select a date'),'error'); return false; }
    if (linesDiv.length < 1) { showMsg('Add at least one line','error'); return false; }
    const lines = [];
    linesDiv.forEach(div => {
      const sels = div.querySelectorAll('select');
      const account = sels[0].value;
      const dc = sels[1].value;
      const desc = div.querySelector('input[type=text]').value.trim();
      const amt = parseFloat(div.querySelector('input[type=number]').value || 0);
      if (account && amt > 0) lines.push({ account, desc, dc, amount: amt });
    });
    if (lines.length < 1) { showMsg('Add valid account lines with amounts','error'); return false; }
    const totals = { debit: 0, credit: 0 }; lines.forEach(l => { if (l.dc === 'debit') totals.debit += l.amount; else totals.credit += l.amount; });
    if (Math.abs(totals.debit - totals.credit) > 0.0001) { showMsg('Entry not balanced. Debits must equal Credits','error'); return false; }
    const entry = { id: genId(), date, ref, description: lines.map(l => l.desc || '').filter(Boolean).join(' | '), lines, totalDebit: totals.debit, totalCredit: totals.credit };
    journal.push(entry); localStorage.setItem(GL_KEY, JSON.stringify(journal));
    loadJournal(); clearEntryForm(); showMsg('Journal posted', 'success'); return false;
  }

  function clearEntryForm() {
    const form = document.getElementById('jeForm'); if (form) form.reset();
    const wrapper = document.getElementById('linesWrapper'); if (wrapper) wrapper.innerHTML = '';
    recalcSums();
  }

  function showMsg(txt, type) {
    const m = document.getElementById('jeMsg');
    if (!m) return;
    m.textContent = txt;
    m.className = type === 'error' ? 'error' : 'success';
    setTimeout(() => { m.textContent = ''; m.className = ''; }, 3000);
  }

  function renderJournal() {
    const tbody = document.querySelector('#journalTable tbody'); if (!tbody) return;
    tbody.innerHTML = '';
    const q = (document.getElementById('filterAccount').value || '').toLowerCase();
    const from = document.getElementById('fromDate').value;
    const to = document.getElementById('toDate').value;
    const rows = journal.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    rows.forEach(entry => {
      if (from && entry.date < from) return;
      if (to && entry.date > to) return;
      const linesText = entry.lines.map(l => {
        const acc = coa.find(a => (a.code || a.id) === l.account);
        const accLabel = acc ? ((acc.code ? acc.code + ' — ' : '') + acc.name) : l.account;
        return accLabel + ' (' + (l.dc === 'debit' ? 'Dr' : 'Cr') + ' ' + Number(l.amount).toLocaleString() + ')';
      }).join('<br/>');
      if (q) {
        if (!(entry.ref || '').toLowerCase().includes(q) && !(entry.description || '').toLowerCase().includes(q) &&
          !entry.lines.some(l => {
            const acc = coa.find(a => (a.code || a.id) === l.account);
            return ((acc && (acc.code + ' ' + acc.name) || '') + ' ' + l.desc).toLowerCase().includes(q);
          })) return;
      }
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${entry.date}</td><td>${escapeHtml(entry.ref||'')}</td><td>${escapeHtml(entry.description||'')}</td><td>${linesText}</td><td class="right">${Number(entry.totalDebit).toLocaleString()}</td><td class="right">${Number(entry.totalCredit).toLocaleString()}</td><td style="text-align:right"><button class="small ghost" onclick="GLApp.reverseEntry('${entry.id}')">Reverse</button></td>`;
      tbody.appendChild(tr);
    });
  }

  function reverseEntry(id) {
    if (!confirm('Create reversing entry for this journal?')) return;
    const e = journal.find(x => x.id === id); if (!e) return;
    const revLines = e.lines.map(l => ({ account: l.account, desc: 'Reversal of ' + (l.desc || ''), dc: l.dc === 'debit' ? 'credit' : 'debit', amount: l.amount }));
    const rev = { id: genId(), date: new Date().toISOString().slice(0, 10), ref: 'REV-' + (e.ref || ''), description: 'Reversal of ' + (e.ref || e.id), lines: revLines, totalDebit: e.totalCredit, totalCredit: e.totalDebit };
    journal.push(rev); localStorage.setItem(GL_KEY, JSON.stringify(journal)); loadJournal(); showMsg('Reversing entry posted', 'success');
  }

  function renderTrialBalance() {
    const map = {};
    journal.forEach(j => { j.lines.forEach(l => { if (!map[l.account]) map[l.account] = { debit: 0, credit: 0 }; if (l.dc === 'debit') map[l.account].debit += l.amount; else map[l.account].credit += l.amount; }); });
    const tbody = document.querySelector('#trialTable tbody'); if (!tbody) return;
    tbody.innerHTML = '';
    let totD = 0, totC = 0;
    Object.keys(map).sort().forEach(accKey => {
      const acc = coa.find(a => (a.code || a.id) === accKey);
      const label = acc ? ((acc.code ? acc.code + ' — ' : '') + acc.name) : accKey;
      const d = map[accKey].debit; const c = map[accKey].credit;
      totD += d; totC += c;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${label}</td><td class="right">${Number(d).toLocaleString()}</td><td class="right">${Number(c).toLocaleString()}</td>`;
      tbody.appendChild(tr);
    });
    const td = document.getElementById('trialDebitTotal'), tc = document.getElementById('trialCreditTotal');
    if (td) td.textContent = Number(totD).toLocaleString();
    if (tc) tc.textContent = Number(totC).toLocaleString();
  }

  function resetFilters() { document.getElementById('filterAccount').value = ''; document.getElementById('fromDate').value = ''; document.getElementById('toDate').value = ''; renderJournal(); }

  function quickPost() {
    const acc = document.getElementById('coaSelect').value;
    const amt = parseFloat(document.getElementById('quickAmount').value || 0);
    const side = document.getElementById('quickSide').value;
    if (!acc || amt <= 0) { alert('Select account and enter amount'); return; }
    let counter = (coa.find(a => (a.name || '').toLowerCase().includes('cash') || (a.code || '').startsWith('11')) || coa[0]);
    if (!counter) { alert('No accounts available in Chart of Accounts'); return; }
    const lines = [];
    if (side === 'debit') { lines.push({ account: acc, desc: 'Quick post', dc: 'debit', amount: amt }); lines.push({ account: counter.code || counter.id, desc: 'Counter', dc: 'credit', amount: amt }); }
    else { lines.push({ account: acc, desc: 'Quick post', dc: 'credit', amount: amt }); lines.push({ account: counter.code || counter.id, desc: 'Counter', dc: 'debit', amount: amt }); }
    const entry = { id: genId(), date: new Date().toISOString().slice(0, 10), ref: 'QPOST', description: 'Quick GL post', lines, totalDebit: amt, totalCredit: amt };
    journal.push(entry); localStorage.setItem(GL_KEY, JSON.stringify(journal)); loadJournal(); showMsg('Quick post saved', 'success');
  }

  function openLedger() {
    const q = document.getElementById('ledgerAccountFilter').value.trim(); if (!q) { alert('Enter account code or name'); return; }
    const acc = coa.find(a => (a.code || a.id) === q || (a.name || '').toLowerCase().includes(q.toLowerCase())); if (!acc) { alert('Account not found'); return; }
    const accKey = acc.code || acc.id; const tb = document.getElementById('ledgerView'); tb.innerHTML = `<h4>${acc.code ? acc.code + ' — ' + acc.name : acc.name}</h4>`;
    const table = document.createElement('table'); table.innerHTML = '<thead><tr><th>Date</th><th>Ref</th><th>Description</th><th class="right">Debit</th><th class="right">Credit</th><th class="right">Balance</th></tr></thead>';
    const body = document.createElement('tbody');
    let balance = 0;
    journal.slice().sort((a,b)=> new Date(a.date)-new Date(b.date)).forEach(j => {
      j.lines.forEach(l => {
        if ((l.account) === accKey) {
          const d = l.dc === 'debit' ? l.amount : 0;
          const c = l.dc === 'credit' ? l.amount : 0;
          balance += (d - c);
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${j.date}</td><td>${escapeHtml(j.ref||'')}</td><td>${escapeHtml(l.desc||j.description||'')}</td><td class="right">${d?Number(d).toLocaleString():'-'}</td><td class="right">${c?Number(c).toLocaleString():'-'}</td><td class="right">${Number(balance).toLocaleString()}</td>`;
          body.appendChild(tr);
        }
      });
    });
    table.appendChild(body); tb.appendChild(table);
  }

  function reconcileBalances() { renderTrialBalance(); showMsg('Recalculated', 'success'); }

  function exportJournal() {
    const rows = journal.map(j => ({ id: j.id, date: j.date, ref: j.ref, description: j.description, lines: JSON.stringify(j.lines), debit: j.totalDebit, credit: j.totalCredit }));
    const headers = ['id','date','ref','description','lines','debit','credit'];
    const csv = [headers.join(','), ...rows.map(r => headers.map(h => '"' + String(r[h]||'').replace(/"/g,'""') + '"').join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'journal.csv'; a.click(); URL.revokeObjectURL(url);
  }

  function openImport() { document.getElementById('importFile').click(); }
  function handleImportFile(e) {
    const f = e.target.files[0]; if (!f) return;
    const reader = new FileReader();
    reader.onload = () => { parseJournalCSV(reader.result); e.target.value = ''; };
    reader.readAsText(f);
  }
  function parseJournalCSV(csv) {
    const lines = csv.split('\n').map(l => l.trim()).filter(Boolean);
    const temp = {};
    lines.forEach(line => {
      const cols = line.split(',').map(c => c.trim().replace(/^"|"$/g, ''));
      if (cols.length < 6) return;
      const [date, ref, description, account, dc, amount] = cols;
      const key = date + '|' + ref;
      if (!temp[key]) temp[key] = { date, ref, description, lines: [], debit: 0, credit: 0 };
      temp[key].lines.push({ account, desc: description, dc, amount: parseFloat(amount||0) });
      if (dc === 'debit') temp[key].debit += parseFloat(amount||0); else temp[key].credit += parseFloat(amount||0);
    });
    Object.keys(temp).forEach(k => {
      const e = temp[k];
      if (Math.abs(e.debit - e.credit) > 0.0001) { console.warn('Skipping unbalanced import entry', k); return; }
      journal.push({ id: genId(), date: e.date, ref: e.ref, description: e.description, lines: e.lines, totalDebit: e.debit, totalCredit: e.credit });
    });
    localStorage.setItem(GL_KEY, JSON.stringify(journal));
    loadJournal(); alert('Import complete');
  }

  function simulateModulePost() {
    const expenseAcc = coa.find(a => (a.name || '').toLowerCase().includes('expense') || (a.type || '').toLowerCase() === 'expense');
    const cashAcc = coa.find(a => (a.name || '').toLowerCase().includes('cash') || (a.code || '').startsWith('11')) || coa[0];
    if (!expenseAcc || !cashAcc) { alert('Please ensure Chart of Accounts has Expense and Cash accounts (demo)'); return; }
    const amt = parseFloat(prompt('Enter expense amount to post', '100') || 0);
    if (!amt || amt <= 0) return;
    const lines = [
      { account: expenseAcc.code || expenseAcc.id, desc: 'Expense from Purchase module', dc: 'debit', amount: amt },
      { account: cashAcc.code || cashAcc.id, desc: 'Paid from Cash/Bank', dc: 'credit', amount: amt }
    ];
    const entry = { id: genId(), date: new Date().toISOString().slice(0,10), ref: 'EXP-'+Math.floor(Math.random()*9000+1000), description: 'Auto-post from Expense module', lines, totalDebit: amt, totalCredit: amt };
    journal.push(entry); localStorage.setItem(GL_KEY, JSON.stringify(journal)); loadJournal(); showMsg('Simulated module post saved','success');
  }

  function escapeHtml(s) { return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // public API
  return {
    toggleMenu, toggleSubMenu, switchLanguage, loadPageFromElement,
    toggleSidebar, toggleMobileSidebar, closeMobileSidebar, logout,
    loadCOA, loadJournal, addLine, clearLines, recalcSums, saveJournalEntry,
    renderJournal, reverseEntry, renderTrialBalance, resetFilters,
    quickPost, openLedger, reconcileBalances, exportJournal, openImport,
    handleImportFile, parseJournalCSV, simulateModulePost, closeMobileSidebar
  };
})();

// ----- wiring -----
document.addEventListener('DOMContentLoaded', function () {
  // language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () { GLApp.switchLanguage(btn, btn.dataset.lang); });
  });

  // default language = English
  const activeLangBtn = document.querySelector('.lang-btn.active') || document.querySelector('.lang-btn[data-lang="en"]');
  if (activeLangBtn) { GLApp.switchLanguage(activeLangBtn, activeLangBtn.dataset.lang || 'en'); }

  // hamburger
  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    if (window.innerWidth <= 768) GLApp.toggleMobileSidebar();
    else GLApp.toggleSidebar();
  });

  // keyboard handlers for menu toggles
  document.querySelectorAll('.menu-toggle-btn, .submenu-toggle').forEach(btn => {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (btn.classList.contains('menu-toggle-btn')) GLApp.toggleMenu(btn);
        if (btn.classList.contains('submenu-toggle')) GLApp.toggleSubMenu(btn);
      }
    });
  });

  // delegated click for data-page
  document.body.addEventListener('click', function (e) {
    const el = e.target.closest('[data-page]');
    if (el) GLApp.loadPageFromElement(el);
  });

  // init GL data + UI
  GLApp.loadCOA();
  GLApp.loadJournal();
  GLApp.addLine({});
});
