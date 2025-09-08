/* script.js - separated JS (i18n, menu toggles, a11y) */

// ---------- i18n (EN/SW) ----------
const I18N = {
  en: {
    'title.dashboard': 'Dashboard',
    'action.logout': 'Logout',
    'welcome.title': 'Welcome to ThinkShip ERP',
    'welcome.subtitle': 'Manage your business operations efficiently with our comprehensive ERP solution.',
    'stats.revenue': 'Total Revenue',
    'stats.stock': 'Products in Stock',
    'stats.orders': 'Pending Orders',
    'stats.users': 'Active Users',
    'menu.reports': 'Reports',
    'submenu.accounting': 'Accounting',
    'subsubmenu.quotations': 'Quotations',
    'subsubmenu.salesOrders': 'Sales Orders',
    'subsubmenu.deliveryNotes': 'Delivery Notes',
    'subsubmenu.invoices': 'Invoices',
    'subsubmenu.trialBalance': 'Trial Balance',
    'subsubmenu.trialBalanceComparison': 'Trial Balance Comparison',
    'subsubmenu.incomeStatement': 'Income Statement',
    'subsubmenu.balanceSheet': 'Balance Sheet',
    'subsubmenu.balanceSheetComparison': 'Balance Sheet Comparison',
    'subsubmenu.ownersEquitySummary': "Owner's Equity Summary",
    'subsubmenu.generalLedger': 'General Ledger',
    'subsubmenu.cashBook': 'Cash Book',
    'subsubmenu.cashFlow': 'Cash Flow',
    'subsubmenu.detailedOwnersEquity': "Detailed Owner's Equity",
    'subsubmenu.budgetComparison': 'Budget Comparison',
    'submenu.customers': 'Customers',
    'subsubmenu.customerManagement': 'Customer Management',
    'subsubmenu.customerGroups': 'Customer Groups',
    'menu.inventory': 'Inventory',
    'menu.requisitions': 'Requisitions',
    'submenu.inventory.summary': 'Summary',
    'submenu.inventory.pos': 'Point of Sale',
    'submenu.inventory.stock_in': 'Stock In',
    'submenu.inventory.stock_out': 'Stock Out',
    'submenu.inventory.configurations': 'Configurations',
    'subsubmenu.inventory.stores': 'Stores',
    'subsubmenu.inventory.suppliers': 'Suppliers',
    'subsubmenu.inventory.trucks': 'Trucks',
    'subsubmenu.inventory.drivers': 'Drivers',
    'subsubmenu.inventory.item_categories': 'Item Categories',
    'subsubmenu.inventory.items': 'Items',
    'subsubmenu.inventory.units': 'Units of Measurements',
    'submenu.requisitions.expense': 'Expense Requisitions',
    'submenu.requisitions.fuel': 'Fuel Requisitions',
    'submenu.requisitions.store': 'Store Requisitions',
    'submenu.requisitions.cash': 'Cash Requisitions Details',
    'menu.accounts': 'Accounts',
    'submenu.budgeting': 'Budgeting & Planning',
    'subsubmenu.createBudget': 'Create Budget',
    'subsubmenu.budgetAnalysis': 'Budget Analysis',
    'subsubmenu.budgetVsActual': 'Budget vs. Actual Report',
    'subsubmenu.projectionReports': 'Projection Reports',
    'submenu.transactions': 'Transactions',
    'subsubmenu.expenseManagement': 'Expense Management',
    'subsubmenu.incomeManagement': 'Income Management',
    'subsubmenu.internalCashTransfer': 'Internal Cash Transfer',
    'subsubmenu.otherTransactions': 'Other Transactions',
    'submenu.ledgerReconciliation': 'Ledger & Reconciliation',
    'subsubmenu.accountsPayable': 'Accounts Payable',
    'subsubmenu.accountsReceivable': 'Accounts Receivable',
    'subsubmenu.bankReconciliation': 'Bank Reconciliation',
    'submenu.reportsShort': 'Reports',
    'subsubmenu.statementChangeEquity': 'Statement of Change in Equity',
    'submenu.chartOfAccounts': 'Chart of Accounts',
    'submenu.configurations': 'Configurations',
    'subsubmenu.categories': 'Categories',
    'subsubmenu.subCategories': 'Sub Categories',
    'subsubmenu.fiscalYears': 'Fiscal Years',
    'subsubmenu.currencies': 'Currencies',
    'subsubmenu.paymentMethods': 'Payment Methods',
    'menu.budgets': 'Budgets',
    'submenu.budgets': 'Budgets',
    'submenu.budgetCategories': 'Budget Categories',
    'menu.procurement': 'Procurement',
    'submenu.procurement.configurations': 'Configurations',
    'subsubmenu.procurement.types': 'Procurement Types',
    'subsubmenu.procurement.services': 'Services',
    'subsubmenu.procurement.requests': 'Purchase Requests',
    'submenu.procurement.operations': 'General Operations',
    'subsubmenu.procurement.rfq': 'Requests for Quotation',
    'subsubmenu.procurement.supplierQuotes': 'Supplier Quotations',
    'subsubmenu.procurement.orders': 'Purchase Orders',
    'subsubmenu.procurement.received': 'Goods Received',
    'submenu.procurement.more': 'More',
    'subsubmenu.procurement.evaluation': 'Evaluation Criteria',
    'menu.manufacturing': 'Manufacturing',
    'submenu.manufacturing.management': 'Manufacturing Management',
    'subsubmenu.manufacturing.workstations': 'Work Stations',
    'subsubmenu.manufacturing.machines': 'Machines',
    'subsubmenu.manufacturing.orders': 'Production Orders',
    'subsubmenu.manufacturing.settings': 'Settings',
    'menu.sales': 'Sales',
    'submenu.sales.general': 'General',
    'subsubmenu.sales.overview': 'Sales Overview',
    'subsubmenu.sales.reports': 'Sales Reports',
    'menu.hr': 'HR Management',
    'submenu.hr.employees': 'Employees',
    'subsubmenu.hr.employeeManagement': 'Employee Management',
    'subsubmenu.hr.attendance': 'Attendance',
    'subsubmenu.hr.leave': 'Leave Management',
    'subsubmenu.hr.payroll': 'Payroll',
    'submenu.hr.recruitment': 'Recruitment',
    'subsubmenu.hr.jobPostings': 'Job Postings',
    'subsubmenu.hr.applications': 'Applications',
    'subsubmenu.hr.interviews': 'Interviews',
    'menu.settings': 'Settings',
    'submenu.settings.userManagement': 'User Management',
    'submenu.settings.system': 'System',
    'subsubmenu.settings.systemConfig': 'System Configuration',
    'subsubmenu.settings.backup': 'Backup & Restore',
    'subsubmenu.settings.auditLogs': 'Audit Logs'
  },

  sw: {
    'title.dashboard': 'Dashibodi',
    'action.logout': 'Ondoka',
    'welcome.title': 'Karibu ThinkShip ERP',
    'welcome.subtitle': 'Simamia shughuli za biashara kwa ufanisi kupitia mfumo wetu kamili wa ERP.',
    'stats.revenue': 'Mapato Yote',
    'stats.stock': 'Bidhaa Zilizopo',
    'stats.orders': 'Oda Zinazosubiri',
    'stats.users': 'Watumiaji Hai',
    'menu.reports': 'Reports',
    'submenu.accounting': 'Uhasibu',
    'subsubmenu.quotations': 'Bei za Nukuu',
    'subsubmenu.salesOrders': 'Oda za Mauzo',
    'subsubmenu.deliveryNotes': 'Hati za Utoaji',
    'subsubmenu.invoices': 'Ankara',
    'subsubmenu.trialBalance': 'Jaribio la Mizania',
    'subsubmenu.trialBalanceComparison': 'Ulinganisho wa Jaribio la Mizania',
    'subsubmenu.incomeStatement': 'Taarifa ya Mapato',
    'subsubmenu.balanceSheet': 'Taarifa ya Fedha',
    'subsubmenu.balanceSheetComparison': 'Ulinganisho wa Taarifa ya Fedha',
    'subsubmenu.ownersEquitySummary': 'Muhtasari wa Hisa za Wamiliki',
    'subsubmenu.generalLedger': 'Kitabu Kikuu',
    'subsubmenu.cashBook': 'Kitabu cha Fedha',
    'subsubmenu.cashFlow': 'Mtiririko wa Fedha',
    'subsubmenu.detailedOwnersEquity': 'Hisa za Wamiliki kwa Kina',
    'subsubmenu.budgetComparison': 'Ulinganisho wa Bajeti',
    'submenu.customers': 'Wateja',
    'subsubmenu.customerManagement': 'Usimamizi wa Wateja',
    'subsubmenu.customerGroups': 'Makundi ya Wateja',
    'menu.inventory': 'Hisa',
    'menu.requisitions': 'Maombi',
    'submenu.inventory.summary': 'Muhtasari',
    'submenu.inventory.pos': 'Sehemu ya Mauzo',
    'submenu.inventory.stock_in': 'Hisa Zilizopokelewa',
    'submenu.inventory.stock_out': 'Hisa Zilizotolewa',
    'submenu.inventory.configurations': 'Mipangilio',
    'subsubmenu.inventory.stores': 'Maduka',
    'subsubmenu.inventory.suppliers': 'Wasambazaji',
    'subsubmenu.inventory.trucks': 'Magari ya Mizigo',
    'subsubmenu.inventory.drivers': 'Madereva',
    'subsubmenu.inventory.item_categories': 'Makundi ya Bidhaa',
    'subsubmenu.inventory.items': 'Bidhaa',
    'subsubmenu.inventory.units': 'Vitengo vya Vipimo',
    'submenu.requisitions.expense': 'Maombi ya Matumizi',
    'submenu.requisitions.fuel': 'Maombi ya Mafuta',
    'submenu.requisitions.store': 'Maombi ya Duka',
    'submenu.requisitions.cash': 'Maelezo ya Maombi ya Fedha',
    'menu.accounts': 'Akaunti',
    'submenu.budgeting': 'Bajeti & Mipango',
    'subsubmenu.createBudget': 'Tengeneza Bajeti',
    'subsubmenu.budgetAnalysis': 'Uchambuzi wa Bajeti',
    'subsubmenu.budgetVsActual': 'Bajeti dhidi ya Halisi',
    'subsubmenu.projectionReports': 'Ripoti za Utabiri',
    'submenu.transactions': 'Miamala',
    'subsubmenu.expenseManagement': 'Usimamizi wa Matumizi',
    'subsubmenu.incomeManagement': 'Usimamizi wa Mapato',
    'subsubmenu.internalCashTransfer': 'Uhamisho wa Fedha wa Ndani',
    'subsubmenu.otherTransactions': 'Miamala Mengine',
    'submenu.ledgerReconciliation': 'Kitabu & Ulinganishaji',
    'subsubmenu.accountsPayable': 'Malipo kwa Wauzaji',
    'subsubmenu.accountsReceivable': 'Mapokezi kutoka kwa Wateja',
    'subsubmenu.bankReconciliation': 'Ulinganishaji wa Benki',
    'submenu.reportsShort': 'Ripoti',
    'subsubmenu.statementChangeEquity': 'Taarifa ya Mabadiliko ya Hisa',
    'submenu.chartOfAccounts': 'Orodha ya Akaunti',
    'submenu.configurations': 'Mipangilio',
    'subsubmenu.categories': 'Makundi',
    'subsubmenu.subCategories': 'Vikundi Vidogo',
    'subsubmenu.fiscalYears': 'Miaka ya Fedha',
    'subsubmenu.currencies': 'Sarafu',
    'subsubmenu.paymentMethods': 'Mbinu za Malipo',
    'menu.budgets': 'Bajeti',
    'submenu.budgets': 'Bajeti',
    'submenu.budgetCategories': 'Makundi ya Bajeti',
    'menu.procurement': 'Ununuzi',
    'submenu.procurement.configurations': 'Mipangilio',
    'subsubmenu.procurement.types': 'Aina za Ununuzi',
    'subsubmenu.procurement.services': 'Huduma',
    'subsubmenu.procurement.requests': 'Maombi ya Ununuzi',
    'submenu.procurement.operations': 'Shughuli za Jumla',
    'subsubmenu.procurement.rfq': 'Maombi ya Nukuu',          /* <<-- fixed typo here */
    'subsubmenu.procurement.supplierQuotes': 'Nukuu za Wasambazaji',
    'subsubmenu.procurement.orders': 'Amri za Ununuzi',
    'subsubmenu.procurement.received': 'Bidhaa Zilizopokelewa',
    'submenu.procurement.more': 'Zaidi',
    'subsubmenu.procurement.evaluation': 'Vigezo vya Tathmini',
    'menu.manufacturing': 'Uzalishaji',
    'submenu.manufacturing.management': 'Usimamizi wa Uzalishaji',
    'subsubmenu.manufacturing.workstations': 'Vituo vya Kazi',
    'subsubmenu.manufacturing.machines': 'Mashine',
    'subsubmenu.manufacturing.orders': 'Amri za Uzalishaji',
    'subsubmenu.manufacturing.settings': 'Mipangilio',
    'menu.sales': 'Mauzo',
    'submenu.sales.general': 'Jumla',
    'subsubmenu.sales.overview': 'Muhtasari wa Mauzo',
    'subsubmenu.sales.reports': 'Ripoti za Mauzo',
    'menu.hr': 'Usimamizi wa Rasilimali Watu',
    'submenu.hr.employees': 'Wafanyakazi',
    'subsubmenu.hr.employeeManagement': 'Usimamizi wa Wafanyakazi',
    'subsubmenu.hr.attendance': 'Mahudhurio',
    'subsubmenu.hr.leave': 'Usimamizi wa Likizo',
    'subsubmenu.hr.payroll': 'Mishahara',
    'submenu.hr.recruitment': 'Uajiri',
    'subsubmenu.hr.jobPostings': 'Matangazo ya Kazi',
    'subsubmenu.hr.applications': 'Maombi',
    'subsubmenu.hr.interviews': 'Usaili',
    'menu.settings': 'Mipangilio',
    'submenu.settings.userManagement': 'Usimamizi wa Watumiaji',
    'submenu.settings.system': 'Mfumo',
    'subsubmenu.settings.systemConfig': 'Mipangilio ya Mfumo',
    'subsubmenu.settings.backup': 'Hifadhi & Rejesha',
    'subsubmenu.settings.auditLogs': 'Kumbukumbu za Ukaguzi'
  }
};

// apply i18n to DOM
function applyI18n(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = I18N[lang] && I18N[lang][key];
    if (text) el.textContent = text;
  });
}

// language switch
function switchLanguage(button, lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  applyI18n(lang);
  console.log('Switching to language:', lang);
}

/* Collapsible helpers */
function setExpanded(btn, expanded) {
  btn.setAttribute('aria-expanded', String(expanded));
}
function openSection(container) {
  container.style.display = 'block';
  const height = container.scrollHeight + 'px';
  container.style.maxHeight = height;
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

/* toggle main menu */
function toggleMenu(button) {
  const menuItem = button.parentElement;
  const submenu = menuItem.querySelector('.submenu');
  const willOpen = !menuItem.classList.contains('open');

  document.querySelectorAll('.menu-item.open').forEach(item => {
    if (item !== menuItem) {
      item.classList.remove('open');
      const sub = item.querySelector('.submenu');
      if (sub) closeSection(sub);
      const btn = item.querySelector('.menu-toggle-btn');
      if (btn) setExpanded(btn, false);
    }
  });

  menuItem.classList.toggle('open', willOpen);
  if (submenu) (willOpen ? openSection(submenu) : closeSection(submenu));
  setExpanded(button, willOpen);
}

/* toggle submenu */
function toggleSubMenu(button) {
  const submenuItem = button.parentElement;
  const subsubmenu = submenuItem.querySelector('.subsubmenu');
  const willOpen = !submenuItem.classList.contains('open');

  const parentSubmenu = submenuItem.parentElement;
  parentSubmenu.querySelectorAll('.submenu-item.open').forEach(item => {
    if (item !== submenuItem) {
      item.classList.remove('open');
      const sub = item.querySelector('.subsubmenu');
      if (sub) closeSection(sub);
      const btn = item.querySelector('.submenu-toggle');
      if (btn) setExpanded(btn, false);
    }
  });

  submenuItem.classList.toggle('open', willOpen);
  if (subsubmenu) (willOpen ? openSection(subsubmenu) : closeSection(subsubmenu));
  setExpanded(button, willOpen);
}

/* load page */
function loadPage(element, pageName) {
  document.querySelectorAll('.submenu-item.active, .subsubmenu-item.active').forEach(item => {
    item.classList.remove('active');
    item.removeAttribute('aria-current');
  });
  element.classList.add('active');
  element.setAttribute('aria-current', 'page');
  document.querySelector('.page-title').textContent = pageName;
  console.log('Loading page:', pageName);
}

/* sidebar behavior */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
  const expanded = !sidebar.classList.contains('collapsed');
  document.getElementById('hamburger').setAttribute('aria-expanded', String(expanded));
}
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.add('show');
  overlay.classList.add('show');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'true');
}
function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
}

/* logout */
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    window.location.href = 'index.html';
  }
}

/* Accessibility: keyboard support */
function handleToggleKeydown(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const el = e.currentTarget;
    if (el.classList.contains('menu-toggle-btn')) toggleMenu(el);
    if (el.classList.contains('submenu-toggle')) toggleSubMenu(el);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // set ARIA relationships & initial states
  document.querySelectorAll('.menu-item').forEach((item, idx) => {
    const btn = item.querySelector('.menu-toggle-btn');
    const panel = item.querySelector('.submenu');
    if (btn && panel) {
      const id = 'submenu-' + idx;
      panel.id = id;
      btn.setAttribute('aria-controls', id);
      setExpanded(btn, false);
      panel.style.display = 'none';
      panel.style.maxHeight = '0px';
    }
  });

  document.querySelectorAll('.submenu-item').forEach((item, idx) => {
    const btn = item.querySelector('.submenu-toggle');
    const panel = item.querySelector('.subsubmenu');
    if (btn && panel) {
      const id = 'subsubmenu-' + idx;
      panel.id = id;
      btn.setAttribute('aria-controls', id);
      setExpanded(btn, false);
      panel.style.display = 'none';
      panel.style.maxHeight = '0px';
    }
  });

  // keyboard toggling
  document.querySelectorAll('.menu-toggle-btn, .submenu-toggle').forEach(btn => {
    btn.addEventListener('keydown', handleToggleKeydown);
  });

  // hamburger action
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      if (window.innerWidth <= 768) toggleMobileSidebar();
      else toggleSidebar();
    });
  }

  // close mobile sidebar when clicking outside (already wired to overlay click too)
  document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    if (window.innerWidth <= 768 && sidebar.classList.contains('show') && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileSidebar();
    }
  });

  // handle resize
  window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (window.innerWidth > 768) {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    }
  });

  // initial i18n
  applyI18n('en');
});
