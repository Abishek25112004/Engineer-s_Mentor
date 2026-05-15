import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const fileRef = useRef(null);
  const sectionRef = useRef(null);

  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    phone: "",
    title: "",
    message: "",
    curious: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // ✅ Use FormData for file upload
      const form = new FormData();

      form.append("name", formData.name);
      form.append("email", formData.contact);
      form.append("phone", formData.phone);
      form.append("projectTitle", formData.title);

      form.append("message", formData.message);
      form.append("curious", formData.curious);

      // ✅ Attach actual file
      if (fileRef.current?.files[0]) {
        form.append("abstract", fileRef.current.files[0]);
      }

      const res = await fetch("https://engineer-s-mentor-1.onrender.com/send-email", {
        method: "POST",
        body: form, // 🚨 NO headers when using FormData
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
        setFormData({
          name: "",
          contact: "",
          phone: "",
          title: "",
          message: "",
          curious: "",
        });
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

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="orb orb-cyan w-[300px] h-[300px] -top-20 -left-20 opacity-10" />
      <div className="orb orb-violet w-[250px] h-[250px] bottom-10 -right-20 opacity-10" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Discuss <span className="gradient-text">Your Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill in the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`glass-card rounded-2xl p-6 md:p-8 space-y-5 relative overflow-hidden glow-border hover:!transform-none ${
            visible ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          {/* Inner gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80 text-sm font-medium">
                Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="name"
                required
                placeholder="Your full name"
                onChange={handleChange}
                className="bg-white/[0.04] border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="text-foreground/80 text-sm font-medium">
                Email or Phone <span className="text-primary">*</span>
              </Label>
              <Input
                id="contact"
                required
                placeholder="email@example.com"
                onChange={handleChange}
                className="bg-white/[0.04] border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground/80 text-sm font-medium">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              className="bg-white/[0.04] border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-foreground/80 text-sm font-medium">
              Project Title <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>
            <Input
              id="title"
              placeholder="e.g. AI-Based Attendance System"
              onChange={handleChange}
              className="bg-white/[0.04] border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground/80 text-sm font-medium">
              Abstract Upload <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>

            <div
              onClick={() => fileRef.current?.click()}
              className="group border-2 border-dashed border-white/[0.08] rounded-xl p-6 text-center cursor-pointer hover:border-primary/40 transition-all duration-400 hover:bg-primary/[0.02] relative overflow-hidden"
            >
              {fileName ? (
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  <p className="text-sm text-foreground/80">{fileName}</p>
                </div>
              ) : (
                <>
                  <Upload size={28} className="mx-auto mb-2 text-muted-foreground/50 group-hover:text-primary/60 transition-colors duration-300" />
                  <p className="text-sm text-muted-foreground/60">
                    Click to upload your abstract (PDF, DOC, DOCX)
                  </p>
                </>
              )}

              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFile}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/80 text-sm font-medium">
              Message / Requirements <span className="text-primary">*</span>
            </Label>

            <Textarea
              id="message"
              required
              rows={4}
              placeholder="Describe your project requirements..."
              onChange={handleChange}
              className="bg-white/[0.04] border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all duration-300 resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="curious" className="text-foreground/80 text-sm font-medium">
              Anything specific you're curious about?
              <span className="text-muted-foreground text-xs ml-1">(optional)</span>
            </Label>

            <Input
              id="curious"
              placeholder="e.g. Can this be done in Python?"
              onChange={handleChange}
              className="bg-white/[0.04] border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-11 transition-all duration-300"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold border-0 glow-btn rounded-xl h-12 text-base"
            disabled={submitting}
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <>
                Send Message <Send size={16} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;