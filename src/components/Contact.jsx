import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const Contact = () => {
  const { toast } = useToast();
  const fileRef = useRef(null);
  const sectionRef = useRef(null);
  const { handleMouseMove, handleMouseLeave } = useTilt(4, 1200);

  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", contact: "", phone: "", title: "", message: "", curious: "",
  });

  useScrollReveal(sectionRef, ".reveal", { y: 50, stagger: 0.12 });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.contact);
      form.append("phone", formData.phone);
      form.append("projectTitle", formData.title);
      form.append("message", formData.message);
      form.append("curious", formData.curious);

      if (fileRef.current?.files[0]) {
        form.append("abstract", fileRef.current.files[0]);
      }

      const res = await fetch("https://engineer-s-mentor-1.onrender.com/send-email", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      toast({
        title: data.success ? "Message sent!" : "Error",
        description: data.message || "Server response received",
        variant: data.success ? "default" : "destructive",
      });

      if (data.success) {
        e.target.reset();
        setFileName("");
        setFormData({ name: "", contact: "", phone: "", title: "", message: "", curious: "" });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to send message. Server not responding.",
        variant: "destructive",
      });
    }

    setSubmitting(false);
  };

  const inputClass = "bg-white/[0.03] border-white/[0.06] text-foreground placeholder:text-muted-foreground/40 focus:border-[#00d4ff]/40 focus:ring-[#00d4ff]/15 rounded-xl h-11 transition-all duration-300";

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden" ref={sectionRef}>
      <div className="orb orb-cyan w-[350px] h-[350px] -top-24 -left-24 opacity-8" />
      <div className="orb orb-violet w-[300px] h-[300px] bottom-10 -right-24 opacity-8" />

      <div className="container mx-auto px-4 md:px-8 max-w-2xl relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-sm font-semibold text-[#00d4ff] uppercase tracking-[0.25em] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Discuss <span className="gradient-text">Your Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill in the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form with 3D tilt */}
        <form
          onSubmit={handleSubmit}
          className="reveal glass-card rounded-2xl p-6 md:p-8 space-y-5 relative overflow-hidden glow-border tilt-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00d4ff]" />

          <div className="tilt-inner grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/70 text-sm font-medium">
                Name <span className="text-[#00d4ff]">*</span>
              </Label>
              <Input id="name" required placeholder="Your full name" onChange={handleChange} className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-foreground/70 text-sm font-medium">
                Email or Phone <span className="text-[#00d4ff]">*</span>
              </Label>
              <Input id="contact" required placeholder="email@example.com" onChange={handleChange} className={inputClass} />
            </div>
          </div>

          <div className="tilt-inner space-y-2">
            <Label htmlFor="phone" className="text-foreground/70 text-sm font-medium">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" onChange={handleChange} className={inputClass} />
          </div>

          <div className="tilt-inner space-y-2">
            <Label htmlFor="title" className="text-foreground/70 text-sm font-medium">
              Project Title <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>
            <Input id="title" placeholder="e.g. AI-Based Attendance System" onChange={handleChange} className={inputClass} />
          </div>

          <div className="tilt-inner space-y-2">
            <Label className="text-foreground/70 text-sm font-medium">
              Abstract Upload <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>
            <div
              onClick={() => fileRef.current?.click()}
              className="group border-2 border-dashed border-white/[0.06] rounded-xl p-6 text-center cursor-pointer hover:border-[#00d4ff]/30 transition-all duration-400 hover:bg-[#00d4ff]/[0.01]"
              data-cursor-hover
            >
              {fileName ? (
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} className="text-[#00d4ff]" />
                  <p className="text-sm text-foreground/80">{fileName}</p>
                </div>
              ) : (
                <>
                  <Upload size={28} className="mx-auto mb-2 text-muted-foreground/40 group-hover:text-[#00d4ff]/50 transition-colors" />
                  <p className="text-sm text-muted-foreground/50">Click to upload your abstract (PDF, DOC, DOCX)</p>
                </>
              )}
              <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
            </div>
          </div>

          <div className="tilt-inner space-y-2">
            <Label htmlFor="message" className="text-foreground/70 text-sm font-medium">
              Message / Requirements <span className="text-[#00d4ff]">*</span>
            </Label>
            <Textarea id="message" required rows={4} placeholder="Describe your project requirements..." onChange={handleChange}
              className="bg-white/[0.03] border-white/[0.06] text-foreground placeholder:text-muted-foreground/40 focus:border-[#00d4ff]/40 focus:ring-[#00d4ff]/15 rounded-xl transition-all duration-300 resize-none"
            />
          </div>

          <div className="tilt-inner space-y-2">
            <Label htmlFor="curious" className="text-foreground/70 text-sm font-medium">
              Anything specific you're curious about? <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>
            <Input id="curious" placeholder="e.g. Can this be done in Python?" onChange={handleChange} className={inputClass} />
          </div>

          <Button
            type="submit"
            size="lg"
            className="tilt-inner w-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-[#050a18] font-bold border-0 glow-btn rounded-xl h-12 text-base"
            disabled={submitting}
            data-cursor-hover
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#050a18]/30 border-t-[#050a18] rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <>Send Message <Send size={16} className="ml-2" /></>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;