# NoAnnoyance (GNOME Shell Extension)

This extension disables the “Window Is Ready” notification.

## Installation

[<img src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true" alt="Get it on GNOME Extensions" height="100" align="middle">][EGO]

### Manual Installation

```
mkdir -p ~/.local/share/gnome-shell/extensions/noannoyance@sindex.com
wget -O - https://github.com/sindex/no-annoyance/archive/refs/heads/master.tar.gz | tar --exclude=".*" -xz --strip-components=1 -C ~/.local/share/gnome-shell/extensions/noannoyance@sindex.com
```

Sadly, the only reliable way to *load* an extension is to restart the shell or worse still, the session when running under Wayland.

Enable or disable the extension:
```
gnome-extensions enable noannoyance@sindex.com
gnome-extensions disable noannoyance@sindex.com
```

## License
NoAnnoyance is distributed under the terms of the GNU General Public License,
version 2 or later. See the [LICENSE](LICENSE) file for details.

[EGO]:https://extensions.gnome.org/extension/1236/noannoyance/
