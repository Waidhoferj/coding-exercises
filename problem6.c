#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *both;
} Node;

Node *root = 0;

Node *xor_node_pointers(Node *p1, Node *p2)
{
    int pointer1 = (int)p1;
    int pointer2 = (int)p2;
    return (Node *)(pointer1 ^ pointer2);
}

Node *get(int index)
{
    Node *cur = root;
    Node *prev = 0;
    int i;
    for (i = 0; i <= index && cur->both != prev; i++)
    {
        Node *next = xor_node_pointers(cur, prev);
        prev = cur;
        cur = next;
    }
    if (index == i)
        return cur;
    else
        return 0;
}

Node *get_last()
{
    Node *cur = root;
    Node *prev = 0;
    while (cur->both != prev)
    {
        Node *next = xor_node_pointers(cur, prev);
        prev = cur;
        cur = next;
    }
    return cur;
}
void add(Node *node)
{
    Node *last_node = get_last();
    node->both = last_node;
    last_node->both = xor_node_pointers(last_node->both, node);
}

void print_list()
{
    Node *cur = root;
    Node *prev = 0;
    while (cur->both != prev)
    {
        printf("%d", cur->data);
        Node *next = xor_node_pointers(cur, prev);
        prev = cur;
        cur = next;
    }
}

int main()
{

    fflush(0);
    root = (Node *)malloc(sizeof(Node));
    printf("I exist 1\n");
    int i;
    for (i = 0; i < 100; i++)
    {
        Node *node = (Node *)malloc(sizeof(Node));
        printf("I exist 2\n");
        add(node);
    }

    print_list();
}