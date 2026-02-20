import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const fileRef = useRef(null);

  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    phone: "",
    title: "",
    message: "",
    curious: "",
  });

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

      form.append(
        "message",
        `${formData.message}\n\nCurious About:\n${formData.curious || "Not Provided"}`
      );

      // ✅ Attach actual file
      if (fileRef.current?.files[0]) {
        form.append("abstract", fileRef.current.files[0]);
      }

      const res = await fetch("http://localhost:5000/send-email", {
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
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-muted-foreground">
            Fill in the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl border border-border/50 card-shadow p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="name" required placeholder="Your full name" onChange={handleChange} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact">
                Email  <span className="text-destructive">*</span>
              </Label>
              <Input id="contact" required placeholder="email@example.com" onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" onChange={handleChange} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="title">
              Project Title <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>
            <Input id="title" placeholder="e.g. AI-Based Attendance System" onChange={handleChange} />
          </div>

          <div className="space-y-1.5">
            <Label>
              Abstract Upload <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>

            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-accent transition-colors"
            >
              <Upload size={28} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                {fileName || "Click to upload your abstract (PDF, DOC, DOCX)"}
              </p>

              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFile}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">
              Message / Requirements <span className="text-destructive">*</span>
            </Label>

            <Textarea
              id="message"
              required
              rows={4}
              placeholder="Describe your project requirements..."
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="curious">
              Anything specific you're curious about?
              <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>

            <Input id="curious" placeholder="e.g. Can this be done in Python?" onChange={handleChange} />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? "Sending..." : <>Send Message <Send size={16} className="ml-1" /></>}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;