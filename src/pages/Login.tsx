import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-education.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to institution selection after login
    navigate("/select-institution");
  };

  return (
    <div className="flex min-h-screen">
      {/* Hero Section - Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative gradient-hero items-center justify-center p-12">
        <div className="absolute inset-0 bg-black/20" />
        <img
          src={heroImage}
          alt="Estudantes africanos e professor em sala de aula ao ar livre"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-white text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-2">Educare</h1>
            <div className="h-1 w-20 bg-white/80 mx-auto rounded-full" />
          </div>
          <p className="text-xl font-light leading-relaxed">
            Conectando escolas, professores, alunos e responsáveis em uma única plataforma
          </p>
        </div>
      </div>

      {/* Login Form - Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Educare</h1>
            <p className="text-muted-foreground">Bem-vindo de volta</p>
          </div>

          {/* Form Header */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Acesse sua conta</h2>
            <p className="text-muted-foreground">
              Digite suas credenciais para continuar
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground font-medium">
                  Usuário
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm text-primary hover:text-primary-light transition-base font-medium"
              >
                Esqueceu sua conta?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold shadow-medium hover:shadow-soft"
              size="lg"
            >
              Entrar
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <a href="#" className="text-primary hover:text-primary-light font-medium transition-base">
                Entre em contato com sua instituição
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
