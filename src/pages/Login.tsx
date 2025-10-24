import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-static.png";
import logoEducar from "@/assets/logo-educar.png";

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
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12">
        <div className="absolute inset-0 gradient-overlay" />
        <img
          src={heroImage}
          alt="Jovens africanos com tablets em ambiente educacional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-white text-center max-w-md">
          <p className="text-xl font-light leading-relaxed">
            Conectando escolas, professores, alunos e responsáveis em uma única plataforma
          </p>
        </div>
      </div>

      {/* Login Form - Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome */}
          <div className="text-center space-y-4">
            <img
              src={logoEducar}
              alt="Logo Educar"
              className="h-16 mx-auto"
            />
            <div className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md">
              <h1 className="text-lg font-medium">Bem vindo ao Educar</h1>
            </div>
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
              className="w-full h-12 text-base font-semibold shadow-medium hover:shadow-soft bg-secondary hover:bg-secondary/90 text-secondary-foreground"
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
