import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const SelectInstitution = () => {
  const [institution, setInstitution] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the logic to proceed to the dashboard
    console.log("Selected institution:", institution);
  };

  // Mock institutions data
  const institutions = [
    { id: "1", name: "Colégio Santo Agostinho" },
    { id: "2", name: "Escola Municipal João XXIII" },
    { id: "3", name: "Centro Educacional Dom Bosco" },
    { id: "4", name: "Instituto de Educação São José" },
    { id: "5", name: "Colégio Estadual Machado de Assis" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Hero Section - Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative gradient-hero items-center justify-center p-12">
        <div className="absolute inset-0 bg-black/20" />
        <img
          src={heroImage}
          alt="Estudantes e professores colaborando"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-white text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-2">Educar</h1>
            <div className="h-1 w-20 bg-white/80 mx-auto rounded-full" />
          </div>
          <p className="text-xl font-light leading-relaxed">
            Uma plataforma, múltiplas instituições. Escolha e conecte-se.
          </p>
        </div>
      </div>

      {/* Institution Selection - Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Educar</h1>
            <p className="text-muted-foreground">Bem-vindo</p>
          </div>

          {/* Icon and Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Selecione sua instituição
            </h2>
            <p className="text-muted-foreground">
              Escolha a instituição de ensino para continuar
            </p>
          </div>

          {/* Selection Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="institution" className="text-foreground font-medium">
                Instituição de Ensino
              </Label>
              <Select value={institution} onValueChange={setInstitution} required>
                <SelectTrigger 
                  id="institution"
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                >
                  <SelectValue placeholder="Selecione uma instituição" />
                </SelectTrigger>
                <SelectContent>
                  {institutions.map((inst) => (
                    <SelectItem 
                      key={inst.id} 
                      value={inst.id}
                    >
                      {inst.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Não encontra sua instituição? Entre em contato com o suporte.
              </p>
            </div>

            <Button
              type="submit"
              disabled={!institution}
              className="w-full h-12 text-base font-semibold shadow-medium hover:shadow-soft"
              size="lg"
            >
              Continuar
            </Button>
          </form>

          {/* Back Link */}
          <div className="text-center pt-6 border-t border-border">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-base"
            >
              ← Voltar para o login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInstitution;
