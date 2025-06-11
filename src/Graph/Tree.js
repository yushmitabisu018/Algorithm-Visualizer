// draw tree class functions start :/

export class Tree {
    constructor(node = 0, children = [], label = "") {
        this.id = 0;
        this.node = node;
        this.label = label;
        this.width = (typeof node === 'string') ? node.length : 1; // Fixed: node might not have length if number
        this.children = children;
    }
}

export class DrawTree {
    constructor(tree, parent = undefined, depth = 0, number = 1) {
        this.x = -1;
        this.y = depth;
        this.tree = tree;
        this.children = [];
        for (let i = 0; i < tree.children.length; i++) {
            let newTree = new DrawTree(tree.children[i], this, depth + 1, i + 1);
            this.children.push(newTree);
        }
        this.parent = parent;
        this.thread = undefined;
        this.mod = 0;
        this.ancestor = this;
        this.change = 0;
        this.shift = 0;
        this._lmost_sibling = undefined;
        this.number = number;
    }

    left() {
        if (this.thread !== undefined) return this.thread;
        if (this.children.length !== 0) return this.children[0];
        return undefined;
    }
    right() {
        if (this.thread !== undefined) return this.thread;
        if (this.children.length !== 0) return this.children[this.children.length - 1];
        return undefined;
    }
    lbrother() {
        let n = undefined;
        if (this.parent) {
            for (let i = 0; i < this.parent.children.length; i++) {
                let node = this.parent.children[i];
                if (node === this) {
                    return n;
                } else {
                    n = node;
                }
            }
        }
        return n;
    }
    get_lmost_sibling() {
        if (!this._lmost_sibling && this.parent && this !== this.parent.children[0]) {
            this._lmost_sibling = this.parent.children[0];
        }
        return this._lmost_sibling;
    }
}

export function buchheim(tree) {
    let dt = firstwalk(new DrawTree(tree));
    let min = second_walk(dt);
    if (min < 0) {
        third_walk(dt, -min);
    }
    return dt;
}

function third_walk(tree, n) {
    tree.x += n;
    for (let i = 0; i < tree.children.length; i++) {
        third_walk(tree.children[i], n);
    }
}

function firstwalk(v, distance = 1) {
    if (v.children.length === 0) {
        if (v.get_lmost_sibling()) {
            v.x = v.lbrother().x + distance;
        } else {
            v.x = 0;
        }
    } else {
        let default_ancestor = v.children[0];
        for (let i = 0; i < v.children.length; i++) {
            let w = v.children[i];
            firstwalk(w, distance);
            default_ancestor = apportion(w, default_ancestor, distance);
        }
        execute_shifts(v);
        let midpoint = (v.children[0].x + v.children[v.children.length - 1].x) / 2;
        let w = v.lbrother();
        if (w) {
            v.x = w.x + distance;
            v.mod = v.x - midpoint;
        } else {
            v.x = midpoint;
        }
    }
    return v;
}

function apportion(v, default_ancestor, distance) {
    let w = v.lbrother();
    if (w !== undefined) {
        let vir = v,
            vor = v,
            vil = w,
            vol = v.get_lmost_sibling();
        let sir = v.mod,
            sor = v.mod,
            sil = vil.mod,
            sol = vol.mod;
        while (vil.right() && vir.left()) {
            vil = vil.right();
            vir = vir.left();
            vol = vol.left();
            vor = vor.right();
            vor.ancestor = v;
            let shift = (vil.x + sil) - (vir.x + sir) + distance;
            if (shift > 0) {
                move_subtree(ancestor(vil, v, default_ancestor), v, shift);
                sir += shift;
                sor += shift;
            }
            sil += vil.mod;
            sir += vir.mod;
            sol += vol.mod;
            sor += vor.mod;
        }
        if (vil.right() && !vor.right()) {
            vor.thread = vil.right();
            vor.mod += sil - sor;
        } else if (vir.left() && !vol.left()) {
            vol.thread = vir.left();
            vol.mod += sir - sol;
        }
        default_ancestor = v;
    }
    return default_ancestor;
}

function move_subtree(wl, wr, shift) {
    let subtrees = wr.number - wl.number;
    wr.change -= shift / subtrees;
    wr.shift += shift;
    wl.change += shift / subtrees;
    wr.x += shift;
    wr.mod += shift;
}

function execute_shifts(v) {
    let shift = 0, change = 0;
    for (let i = v.children.length - 1; i >= 0; i--) {
        let w = v.children[i];
        w.x += shift;
        w.mod += shift;
        change += w.change;
        shift += w.shift + change;
    }
}

function ancestor(vil, v, default_ancestor) {
    if (vil.ancestor && v.parent && v.parent.children.includes(vil.ancestor)) {
        return vil.ancestor;
    } else {
        return default_ancestor;
    }
}

function second_walk(v, m = 0, depth = 0, min = undefined) {
    v.x += m;
    v.y = depth;
    if (min === undefined || v.x < min) min = v.x;
    for (let i = 0; i < v.children.length; i++) {
        let w = v.children[i];
        min = second_walk(w, m + v.mod, depth + 1, min);
    }
    return min;
}

function dfs(tree) {
    if (tree.tree.node === 'B') return;
    console.log(tree.tree.node, tree.x, tree.y);
    for (let i = 0; i < tree.children.length; i++) {
        dfs(tree.children[i]);
    }
}



