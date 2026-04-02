"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Copy, Check, Loader2, CheckCircle2 } from "lucide-react";

const VODAFONE_NUMBER = "01065625096";
const CLOUDINARY_CLOUD = "duxgv5euo";
const CLOUDINARY_PRESET = "coach_ragab_uploads";
const NETLIFY_FORM_NAME = "subscription";

interface SubscriptionFormProps {
  packageName: string;
  packagePrice: string;
  onClose: () => void;
}

type Step = "form" | "success";

export default function SubscriptionForm({
  packageName,
  packagePrice,
  onClose,
}: SubscriptionFormProps) {
  const [step, setStep] = useState<Step>("form");
  const [copied, setCopied] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [screenshotName, setScreenshotName] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    whatsapp: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(VODAFONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`,
        { method: "POST", body: data }
      );
      const json = await res.json();
      if (json.secure_url) {
        setScreenshotUrl(json.secure_url);
        setScreenshotName(file.name);
      } else {
        setError("فشل رفع الصورة، حاول مرة أخرى");
      }
    } catch {
      setError("حدث خطأ أثناء رفع الصورة");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!form.name || !form.age || !form.gender || !form.whatsapp) {
      setError("من فضلك اكمل جميع البيانات");
      return;
    }
    if (!screenshotUrl) {
      setError("من فضلك ارفع سكرين شوت التحويل");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const body = new URLSearchParams({
        "form-name": NETLIFY_FORM_NAME,
        package: packageName,
        price: packagePrice,
        name: form.name,
        age: form.age,
        gender: form.gender,
        whatsapp: form.whatsapp,
        screenshot: screenshotUrl,
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStep("success");
      } else {
        setError("حدث خطأ، حاول مرة أخرى");
      }
    } catch {
      setError("حدث خطأ في الإرسال");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 mx-auto max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-3xl bg-[#0F0F0F] border border-[#1A1A1A] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#F5C518] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#1A1A1A] text-white/50 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
          >
            <X size={16} />
          </button>
          <div className="p-6 md:p-8" dir="rtl">
            {step === "form" ? (
              <>
                <div className="mb-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#F5C518] mb-1">
                    [ تسجيل الاشتراك ]
                  </p>
                  <h3 className="text-2xl font-bold uppercase text-white">
                    {packageName}
                  </h3>
                  <p className="text-[#F5C518] font-bold text-lg mt-1">
                    {packagePrice}
                  </p>
                </div>
                <div className="mb-6 rounded-2xl border border-[#CC2200]/30 bg-[#CC2200]/10 p-4">
                  <p className="text-xs text-white/50 mb-2 font-bold uppercase tracking-widest">
                    رقم فودافون كاش للتحويل
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xl font-bold text-white tracking-widest font-mono">
                      {VODAFONE_NUMBER}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 rounded-xl border border-[#CC2200]/40 px-3 py-1.5 text-xs font-bold text-[#CC2200] hover:bg-[#CC2200]/20 transition-colors"
                    >
                      {copied ? (
                        <><Check size={12} />تم النسخ</>
                      ) : (
                        <><Copy size={12} />نسخ</>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wider">الاسم</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="اكتب اسمك هنا"
                      className="w-full rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#F5C518] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wider">السن</label>
                      <input
                        type="number"
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        placeholder="مثال: 25"
                        min={10}
                        max={70}
                        className="w-full rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#F5C518] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wider">النوع</label>
                      <select
                        value={form.gender}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}
                        className="w-full rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] px-4 py-3 text-white text-sm focus:border-[#F5C518] focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0F0F0F]">اختر</option>
                        <option value="ذكر" className="bg-[#0F0F0F]">ذكر</option>
                        <option value="أنثى" className="bg-[#0F0F0F]">أنثى</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wider">رقم الواتساب</label>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#F5C518] focus:outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wider">سكرين شوت التحويل</label>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className={`w-full rounded-xl border-2 border-dashed px-4 py-5 text-sm transition-all duration-300 flex flex-col items-center gap-2 ${
                        screenshotUrl
                          ? "border-[#F5C518]/50 bg-[#F5C518]/5 text-[#F5C518]"
                          : "border-[#1A1A1A] bg-[#1A1A1A] text-white/40 hover:border-[#F5C518]/30 hover:text-white/60"
                      }`}
                    >
                      {uploading ? (
                        <><Loader2 size={20} className="animate-spin" /><span>جاري الرفع...</span></>
                      ) : screenshotUrl ? (
                        <><Check size={20} /><span className="text-xs truncate max-w-full px-2">{screenshotName}</span><span className="text-[10px] text-white/40">اضغط لتغيير الصورة</span></>
                      ) : (
                        <><Upload size={20} /><span>ارفع سكرين شوت التحويل</span><span className="text-[10px]">JPG, PNG, WEBP</span></>
                      )}
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="mb-4 text-xs text-[#CC2200] font-bold text-center">{error}</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={submitting || uploading}
                  className="w-full rounded-xl bg-[#F5C518] py-4 text-base font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-white hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      جاري الإرسال...
                    </span>
                  ) : "إرسال الطلب"}
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 size={72} className="text-[#F5C518] mb-6" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#F5C518] mb-3">[ تم بنجاح ]</p>
                  <h3 className="text-2xl font-bold text-white mb-3">تم تسجيل طلبك!</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    سيتم التواصل معك على واتساب خلال{" "}
                    <span className="text-[#F5C518] font-bold">24 ساعة</span>
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 rounded-xl border border-[#1A1A1A] px-8 py-3 text-sm font-bold text-white/60 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
                  >
                    إغلاق
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
