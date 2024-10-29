{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];
      forAllSystems =
        function: nixpkgs.lib.genAttrs systems (system: function (nixpkgs.legacyPackages.${system}));
    in
    {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nixfmt-rfc-style
            nil
            (python3.withPackages (
              ps: with ps; [
                virtualenv
                flask
                gunicorn
                jinja2
                jsonschema
                pyyaml
                requests
                watchdog
                werkzeug
                python-dotenv
                pip
              ]
            ))
          ];
        };
      });
    };
}
