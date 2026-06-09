import { useState } from 'react';
import { t } from '@/data/translations';
import { services } from '@/data/services';
import { Check, Loader2 } from 'lucide-react';

interface Props {
  compact?: boolean;
  lang: 'ar' | 'en';
}

export default function BookingForm({ compact = false, lang }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    branch: '',
    appointmentType: '',
    date: '',
    timeSlot: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
 
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 90 * 86400000).toISOString().split('T')[0];
 
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = t('validation.required', lang);
    if (!formData.phone.trim()) errs.phone = t('validation.required', lang);
    else if (!/^01[0-2,5]\d{8}$/.test(formData.phone)) errs.phone = t('validation.phone', lang);
    if (!formData.service) errs.service = t('validation.required', lang);
    if (!formData.branch) errs.branch = t('validation.required', lang);
    if (!formData.appointmentType) errs.appointmentType = t('validation.required', lang);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbzESRbc0MymghfPj-ejW3FajIY8mHecD_MU0TIF-86CUvN74WjHUp_erU2mT3N6oLkfag/exec';

    if (!sheetUrl || sheetUrl.includes('YOUR_SCRIPT_ID_HERE') || sheetUrl === '') {
      // Simulate success if URL is not configured
      setTimeout(() => setStatus('success'), 1500);
      return;
    }

    try {
      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors', // Bypass CORS issues with Google Apps Script redirects
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          branchName: formData.branch === 'c1' ? 'عيادة الدقي' : formData.branch === 'c2' ? 'عيادة الفيوم' : 'عيادة الشيخ زايد (قريباً)',
          serviceName: services.find(s => s.id === formData.service)?.titleAr || formData.service,
          appointmentTypeName: formData.appointmentType === 'exam' ? 'كشف في العيادة' : formData.appointmentType === 'followup' ? 'متابعة دورية' : 'حجز إجراء أو عملية',
          dateCreated: new Date().toLocaleString('ar-EG'),
        }),
      });
      setStatus('success');
    } catch (error) {
      console.error('Error submitting booking:', error);
      setErrors({ submit: lang === 'ar' ? 'حدث خطأ في الشبكة، برجاء المحاولة لاحقاً.' : 'Network error, please try again later.' });
      setStatus('idle');
    }
  };

  const update = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const inputClass = "w-full px-4 py-3 border border-divider rounded-xl text-sm bg-white text-deep-navy placeholder-light-slate focus:outline-none focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/10 transition-all";
  const errorClass = "text-red-500 text-xs mt-1";

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <select value={formData.branch} onChange={e => update('branch', e.target.value)} className={inputClass}>
          <option value="">{t('booking.form.branch', lang)}</option>
          <option value="c1">{t('booking.form.branch.c1', lang)}</option>
          <option value="c2">{t('booking.form.branch.c2', lang)}</option>
          <option value="c3">{t('booking.form.branch.c3', lang)}</option>
        </select>
        {errors.branch && <p className={errorClass}>{errors.branch}</p>}
        <select value={formData.service} onChange={e => update('service', e.target.value)} className={inputClass}>
          <option value="">{t('hero.widget.service', lang)}</option>
          {services.map(s => <option key={s.id} value={s.id}>{lang === 'ar' ? s.titleAr : s.titleEn}</option>)}
        </select>
        {errors.service && <p className={errorClass}>{errors.service}</p>}
        <input type="date" min={today} max={maxDate} value={formData.date} onChange={e => update('date', e.target.value)} className={inputClass} />
        <button type="submit" className="w-full py-2.5 bg-medical-blue text-white text-sm font-semibold rounded-xl hover:bg-electric-blue transition-colors">
          {t('hero.widget.submit', lang)}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-form">
      <h3 className="font-semibold text-xl text-deep-navy mb-1">{t('booking.form.title', lang)}</h3>
      <p className="text-slate-custom text-sm mb-6">{t('booking.form.subtitle', lang)}</p>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-trust-green/10 flex items-center justify-center mb-4">
            <Check size={32} className="text-trust-green" />
          </div>
          <h4 className="text-trust-green font-semibold text-lg">{t('booking.form.success', lang)}</h4>
          <p className="text-slate-custom text-sm mt-2">{t('booking.form.subtitle', lang)}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="text" placeholder={t('booking.form.namePlaceholder', lang)} value={formData.name} onChange={e => update('name', e.target.value)} className={inputClass} />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-custom">🇪🇬 +20</span>
            <input type="tel" placeholder={t('booking.form.phonePlaceholder', lang)} value={formData.phone} onChange={e => update('phone', e.target.value)} className={`${inputClass} pl-24`} />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <select value={formData.branch} onChange={e => update('branch', e.target.value)} className={inputClass}>
                <option value="">{t('booking.form.branch', lang)}</option>
                <option value="c1">{t('booking.form.branch.c1', lang)}</option>
                <option value="c2">{t('booking.form.branch.c2', lang)}</option>
                <option value="c3">{t('booking.form.branch.c3', lang)}</option>
              </select>
              {errors.branch && <p className={errorClass}>{errors.branch}</p>}
            </div>
            <div>
              <select value={formData.appointmentType} onChange={e => update('appointmentType', e.target.value)} className={inputClass}>
                <option value="">{t('booking.form.type', lang)}</option>
                <option value="exam">{t('booking.form.type.exam', lang)}</option>
                <option value="followup">{t('booking.form.type.followup', lang)}</option>
                <option value="procedure">{t('booking.form.type.procedure', lang)}</option>
              </select>
              {errors.appointmentType && <p className={errorClass}>{errors.appointmentType}</p>}
            </div>
            <div>
              <select value={formData.service} onChange={e => update('service', e.target.value)} className={inputClass}>
                <option value="">{t('booking.form.service', lang)}</option>
                {services.map(s => <option key={s.id} value={s.id}>{lang === 'ar' ? s.titleAr : s.titleEn}</option>)}
              </select>
              {errors.service && <p className={errorClass}>{errors.service}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="date" min={today} max={maxDate} value={formData.date} onChange={e => update('date', e.target.value)} className={inputClass} />
            <select value={formData.timeSlot} onChange={e => update('timeSlot', e.target.value)} className={inputClass}>
              <option value="">{t('booking.form.time', lang)}</option>
              <option value="morning">{t('booking.form.time.morning', lang)}</option>
              <option value="afternoon">{t('booking.form.time.afternoon', lang)}</option>
              <option value="evening">{t('booking.form.time.evening', lang)}</option>
            </select>
          </div>
          <textarea rows={3} placeholder={t('booking.form.notesPlaceholder', lang)} value={formData.notes} onChange={e => update('notes', e.target.value)} className={`${inputClass} resize-y`} />
          
          {/* Cash Payment Warning */}
          <div className="text-center bg-[#F8FAFC] p-3 rounded-xl border border-divider text-xs font-semibold text-warm-gold">
            {t('booking.form.payment.warning', lang)}
          </div>

          {errors.submit && <p className="text-red-500 text-sm font-semibold text-center mt-2">{errors.submit}</p>}
          <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-medical-blue text-white font-semibold rounded-xl hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta disabled:opacity-70 flex items-center justify-center gap-2">
            {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> {t('booking.form.loading', lang)}</> : t('booking.form.submit', lang)}
          </button>
          <p className="text-center text-slate-custom text-xs flex items-center justify-center gap-1">
            <span>🔒</span> {t('booking.form.privacy', lang)}
          </p>
        </form>
      )}
    </div>
  );
}
