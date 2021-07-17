# NoAnnoyance (GNOME Shell Extension)

This extension disables the “Window Is Ready” notification.

## Installation

[<img src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true" alt="Get it on GNOME Extensions" height="100" align="middle">][EGO]

### Manual Installation

```
mkdir -p ~/.local/share/gnome-shell/extensions/noannoyance@sindex.com
curl -L https://github.com/sindex/no-annoyance/archive/refs/heads/master.tar.gz | tar --exclude=".*" -xz --strip-components=1 -C ~/.local/share/gnome-shell/extensions/noannoyance@sindex.com
gnome-shell-extension-tool -e noannoyance@sindex.com
```
## License
NoAnnoyance is distributed under the terms of the GNU General Public License,
version 2 or later. See the [LICENSE](LICENSE) file for details.

[EGO]:https://extensions.gnome.org/extension/1236/noannoyance/
